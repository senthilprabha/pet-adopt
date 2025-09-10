import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './HomePage.css';
import i1 from './assets/home1.jpg';
import i2 from './assets/home2.jpg';
import i3 from './assets/home3.jpg';

function HomePage() {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });
    const slideInHeader = useSpring({ transform: 'translateY(0)', from: { transform: 'translateY(-30px)' }, delay: 500 });
    const slideInContent = useSpring({ transform: 'translateY(0)', from: { transform: 'translateY(30px)' }, delay: 700 });

    return (
        <animated.div style={fadeIn} className="new-home-container">
            <animated.div style={slideInHeader} className="new-home-header">
                <h1>Welcome to Pet Adoption Center</h1>
                <p>Find your new best friend today!</p>
            </animated.div>
            <animated.div style={slideInContent} className="new-home-content">
                <div className="new-home-details">
                    <p>
                        Our platform connects loving homes with pets in need. Whether you're looking for a dog, cat, or any other pet, we've got you covered. 
                        Join our community and make a difference today.
                    </p>
                    <p>
                        Register now to explore the profiles of adorable pets waiting for a loving home. Already a member? Log in to access your account and manage your pet preferences.
                    </p>
                </div>
                <div className="new-home-buttons">
                    <Link to="/register" className="new-btn new-btn-register">Register</Link>
                    <Link to="/login" className="new-btn new-btn-login">Login</Link>
                </div>
            </animated.div>
            {/* <div className="new-home-images">
                <img src={i1} alt="Happy Pet" className="new-home-img" />
                <img src={i2} alt="Pet Adoption" className="new-home-img" />
                <img src={i3} alt="Pets" className="new-home-img" />
            </div> */}
        </animated.div>
    );
}

export default HomePage;
