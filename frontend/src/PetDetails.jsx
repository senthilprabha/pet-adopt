
// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import './PetDetails.css';
// // const PetDetails = () => {
// //     const { id } = useParams();
// //     const [pet, setPet] = useState(null);

// //     useEffect(() => {
// //         axios.get(`http://localhost:3001/pets/${id}`)
// //             .then(response => setPet(response.data))
// //             .catch(err => console.error(err));
// //     }, [id]);

// //     if (!pet) return <p>Loading...</p>;
// //     const sendMessageOnWhatsApp = () => {
// //         const message = `Hello, I'm interested in adopting ${pet.name}.`;
// //         const phno = "+916374389691"; // Add the phone number here
// //         window.open(`https://api.whatsapp.com/send?phone=${phno}&text=${encodeURIComponent(message)}`, '_blank');
// //     };
    

// //     return (
// //         <div className="pet-details-container">
// //             <img src={pet.img} alt={pet.name} />
// //             <h1>{pet.name}</h1>
// //             <div className="pet-info">
// //                 <p><strong>Breed:</strong> {pet.breed}</p>
// //                 <p><strong>Age:</strong> {pet.age} years</p>
// //                 <p><strong>Color:</strong> {pet.color}</p>
// //                 <p><strong>Date of Birth:</strong> {pet.dob ? pet.dob.substring(0, 10) : 'N/A'}</p>
// //                 <p><strong>Location:</strong> {pet.location}</p>
// //                 <p><strong>Message:</strong> {pet.message}</p>
// //             </div>
// //             <button onClick={sendMessageOnWhatsApp} className="adopt-button">Adopt</button>
// //         </div>
// //     );
// // };

// // export default PetDetails;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './PetDetails.css';

// const PetDetails = () => {
//   const { id } = useParams();
//   const [pet, setPet] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3001/pets/${id}`)
//       .then(response => setPet(response.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   if (!pet) return <p>Loading...</p>;

//   const sendMessageOnWhatsApp = () => {
//     const message = `Hello, I'm interested in adopting ${pet.name}.`;
//     const phno = "+916374389691"; // Phone number for WhatsApp
//     window.open(`https://api.whatsapp.com/send?phone=${phno}&text=${encodeURIComponent(message)}`, '_blank');
//   };

//   return (
//     <div className="pet-details-page">
//       <header className="pet-header">
//         <button onClick={() => navigate('/home')} className="go-home-button">
//           Go to Home
//         </button>
//       </header>

//       <div className="pet-details-container">
//         <img src={pet.img} alt={pet.name} className="pet-image" />
//         <h1>{pet.name}</h1>
//         <div className="pet-info">
//           <p><strong>Breed:</strong> {pet.breed}</p>
//           <p><strong>Age:</strong> {pet.age} years</p>
//           <p><strong>Color:</strong> {pet.color}</p>
//           <p><strong>Date of Birth:</strong> {pet.dob ? pet.dob.substring(0, 10) : 'N/A'}</p>
//           <p><strong>Location:</strong> {pet.location}</p>
//           <p><strong>Message:</strong> {pet.message}</p>
//         </div>
//         <button onClick={sendMessageOnWhatsApp} className="adopt-button">Adopt</button>
//       </div>
//     </div>
//   );
// };

// export default PetDetails;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PetDetails.css';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/pets/${id}`)
            .then(response => setPet(response.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!pet) return <p>Loading...</p>;

    const sendMessageOnWhatsApp = () => {
        const message = `Hello, I'm interested in adopting ${pet.name}.`;
        const phno = "+916374389691"; 
        window.open(`https://api.whatsapp.com/send?phone=${phno}&text=${encodeURIComponent(message)}`, '_blank');
    };

    const navigateHome = () => {
        navigate('/home');
    };

    return (
        <div className="pet-details-page">
            <header className="pet-details-header">
                <button onClick={navigateHome} className="home-button">Go Home</button>
            </header>
            <div className="pet-content">
                <div className="pet-image-container">
                    <img src={pet.img} alt={pet.name} className="pet-image"/>
                </div>
                <div className="pet-info-container">
                    <h1>{pet.name}</h1>
                    <div className="pet-info">
                        <p><strong>Breed:</strong> {pet.breed}</p>
                        <p><strong>Age:</strong> {pet.age} years</p>
                        <p><strong>Color:</strong> {pet.color}</p>
                        <p><strong>Date of Birth:</strong> {pet.dob ? pet.dob.substring(0, 10) : 'N/A'}</p>
                        <p><strong>Location:</strong> {pet.location}</p>
                        <p><strong>Message:</strong> {pet.message}</p>
                    </div>
                    <button onClick={sendMessageOnWhatsApp} className="adopt-button">Adopt</button>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
