import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import PetDetails from './PetDetails';
import Admin from './Admin';
import HomePage from './HomePage';
import Feedback from './Feedback';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/pet/:id" element={<PetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
