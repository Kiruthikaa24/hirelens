import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import UploadFile from './components/UploadFile';
import Dashboard from './components/Dashboard'; // Added Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Added route */}
      </Routes>
    </Router>
  );
}

export default App;
