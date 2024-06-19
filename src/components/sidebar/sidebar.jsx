// Example Sidebar component (Sidebar.jsx)
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar({handleSidebarClick}) {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link" onClick={handleSidebarClick}>Home</Link>
      <Link to="/shop" className="sidebar-link" onClick={handleSidebarClick}>Shop</Link>
      {/* Add more sidebar links as needed */}
    </div>
  );
};
