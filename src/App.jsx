// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact'; // if you're creating this component
// import Upload from './components/Upload'; // Include if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App; // This default export is required by index.js


