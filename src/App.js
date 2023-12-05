import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './Componets/About';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import Project from './Componets/Project';
import Service from './Componets/Service';
import Skills from './Componets/Skills';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route exact path="/skills" element={<Skills/>} />
        <Route exact path="/project" element={<Project/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

