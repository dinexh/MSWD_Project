import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    FaHome, 
    FaCalendarAlt, 
    FaChartBar, 
    FaCog, 
    FaUser, 
    FaSignOutAlt,
    FaLock,
    FaMoon
} from 'react-icons/fa';
import './Layout.css';

function Sidebar({ isOpen }) {
    const menuItems = [
        { path: '/dashboard', icon: <FaHome />, label: 'Dashboard' },
        { path: '/events', icon: <FaCalendarAlt />, label: 'Events' },
        { path: '/statistics', icon: <FaChartBar />, label: 'Statistics' },
        { 
            path: '/profile', 
            icon: <FaUser />, 
            label: 'Profile',
            subItems: [
                { path: '/profile/change-password', icon: <FaLock />, label: 'Change Password' }
            ]
        },
        { 
            path: '/settings', 
            icon: <FaCog />, 
            label: 'Settings',
            subItems: [
                { path: '/settings/theme', icon: <FaMoon />, label: 'Dark Mode' }
            ]
        },
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo">
                <h2>SportSync</h2>
            </div>
            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <div key={index} className="nav-item">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            <span className="icon">{item.icon}</span>
                            <span className="label">{item.label}</span>
                        </NavLink>
                        {item.subItems && (
                            <div className="sub-items">
                                {item.subItems.map((subItem, subIndex) => (
                                    <NavLink
                                        key={subIndex}
                                        to={subItem.path}
                                        className={({ isActive }) => 
                                            isActive ? 'nav-link sub-link active' : 'nav-link sub-link'
                                        }
                                    >
                                        <span className="icon">{subItem.icon}</span>
                                        <span className="label">{subItem.label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
            <div className="sidebar-footer">
                <button className="logout-btn">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar; 