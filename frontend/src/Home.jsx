import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  const handleFeedbackClick = () => {
    navigate('/feedback'); // Navigate to the feedback page
  };

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Pet Adoption Center</h1>
        <p>Find your new best friend today!</p>
      </header>
      <section className="pet-gallery">
        {pets.map((pet) => (
          <div key={pet._id} className="pet-card">
            <Link to={`/pet/${pet._id}`}>
              <img src={pet.img} alt={pet.name} />
              <h2>{pet.name}</h2>
              <p>Breed: {pet.breed}</p>
            </Link>
          </div>
        ))}
      </section>
      <footer className="home-footer">
        <button onClick={handleFeedbackClick} className="feedback-button">
          Give Feedback
        </button>
        <p>&copy; 2024 Pet Adoption Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
