import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="layout">
            <Sidebar isOpen={sidebarOpen} />
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="content-wrapper">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout; 