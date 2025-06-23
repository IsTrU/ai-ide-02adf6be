import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Completed from './pages/Completed';
import About from './pages/About';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/completed">Completed Tasks</Link>
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/completed" element={<Completed theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/settings" element={<Settings toggleTheme={toggleTheme} theme={theme} />} />
      </Routes>
    </Router>
  );
}

export default App;