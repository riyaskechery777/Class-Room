import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import './index.css';

// Import Pages
import ServicesFacilities from './pages/info/ServicesFacilities';
import AboutUs from './pages/info/AboutUs';
import PrivacyPolicy from './pages/info/PrivacyPolicy';

const MinimalFooter = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
          <BookOpen className="text-accent" size={24} color="var(--accent)" />
          <span className="footer-logo">ClassRoom Pro</span>
        </div>
        
        <nav className="footer-nav">
          <Link to="/services" className="footer-link">Services & Facilities</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

const Header = () => {
  return (
    <header style={{ 
      padding: '1.5rem 2rem', 
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-color)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(11, 15, 25, 0.8)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)', textDecoration: 'none' }}>
        <BookOpen size={28} color="var(--primary)" />
        <span className="footer-logo" style={{ fontSize: '1.5rem' }}>ClassRoom Pro</span>
      </Link>
      
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/services" className="footer-link">Services & Facilities</Link>
        <Link to="/about" className="footer-link">About Us</Link>
      </nav>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        
        <main style={{ display: 'flex', flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/services" replace />} />
            <Route path="/services" element={<ServicesFacilities />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <MinimalFooter />
      </div>
    </Router>
  );
};

export default App;
