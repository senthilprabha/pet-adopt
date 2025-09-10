// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Feedback.css';

// // const Feedback = () => {
// //   const [feedback, setFeedback] = useState('');
// //   const [username, setUsername] = useState('testuser'); // Set a default value for testing
// //   const [successMessage, setSuccessMessage] = useState(''); // State to handle success message
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Sending feedback to the server
// //     fetch('http://localhost:3001/feedback', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ username, feedback }),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log('Feedback submitted:', data);
// //         setSuccessMessage('Feedback submitted successfully!'); // Show success message
// //         setFeedback(''); // Reset feedback field after submission
// //         // Optionally redirect to another page after a short delay
// //         setTimeout(() => {
// //           navigate('/home'); // Redirect to home or another page after submission
// //         }, 3000); // Wait for 3 seconds before redirect
// //       })
// //       .catch((error) => console.error('Error submitting feedback:', error));
// //   };

// //   return (
// //     <div className="feedback-container">
// //       <h2>Submit Your Feedback</h2>
// //       <form onSubmit={handleSubmit}>
// //         <textarea
// //           value={feedback}
// //           onChange={(e) => setFeedback(e.target.value)}
// //           placeholder="Enter your feedback"
// //           required
// //         />
// //         <button type="submit">Submit Feedback</button>
// //       </form>
// //       {successMessage && <p className="success-message">{successMessage}</p>} {/* Conditionally render success message */}
// //     </div>
// //   );
// // };

// // export default Feedback;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Feedback.css';

// const Feedback = () => {
//   const [feedback, setFeedback] = useState('');
//   const [username, setUsername] = useState('testuser'); // Set a default value for testing
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('http://localhost:3001/feedback', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, feedback }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSuccessMessage('🔥 Feedback submitted successfully! 🔥');
//         setFeedback('');
//         setTimeout(() => {
//           navigate('/home');
//         }, 3000); // Redirect to home after 3 seconds
//       })
//       .catch((error) => console.error('Error submitting feedback:', error));
//   };

//   return (
//     <div className="feedback-container">
//       <h2 className="feedback-heading">🔥 Submit Your Fiery Feedback 🔥</h2>
//       <form onSubmit={handleSubmit} className="feedback-form">
//         <textarea
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//           placeholder="Ignite your thoughts here!"
//           required
//           className="feedback-textarea"
//         />
//         <button type="submit" className="feedback-btn">Submit Feedback</button>
//       </form>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default Feedback;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [username, setUsername] = useState('testuser');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, feedback }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Feedback submitted:', data);
        setSuccessMessage('Feedback submitted successfully!');
        setFeedback('');
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      })
      .catch((error) => console.error('Error submitting feedback:', error));
  };

  return (
    <div className="feedback-page">
      <header className="feedback-header">
        <button onClick={() => navigate('/home')} className="go-home-btn">
          Go to Home
        </button>
      </header>

      <div className="feedback-box">
        <h2>Share Your Thoughts</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback"
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Feedback;
