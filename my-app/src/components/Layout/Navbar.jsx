import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Layout.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="brand">
                    <h2>SportSync</h2>
                </div>
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
}

export default Navbar; 