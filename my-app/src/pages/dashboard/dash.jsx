import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dash.css';

function Dashboard() {
    const navigate = useNavigate();
    const [userStats, setUserStats] = useState({
        totalEvents: 0,
        upcomingEvents: 0,
        completedEvents: 0
    });

    // Placeholder for user data - you can replace this with actual API calls
    useEffect(() => {
        // Simulate fetching user stats
        setUserStats({
            totalEvents: 12,
            upcomingEvents: 5,
            completedEvents: 7
        });
    }, []);

    const navigationCards = [
        {
            title: 'Manage Events',
            description: 'Create, edit, and manage your sports events',
            action: () => navigate('/events'),
            icon: '🎮'
        },
        {
            title: 'View Statistics',
            description: 'Track your event performance and analytics',
            action: () => navigate('/statistics'),
            icon: '📊'
        },
        {
            title: 'Profile Settings',
            description: 'Update your profile and preferences',
            action: () => navigate('/profile'),
            icon: '👤'
        }
    ];

    return (
        <div className="Dashboard">
            <div className="dashboard-header">
                <h2>Welcome Back, User!</h2>
                <p className="date">{new Date().toLocaleDateString()}</p>
            </div>

            <div className="stats-container">
                <div className="stat-card">
                    <h3>{userStats.totalEvents}</h3>
                    <p>Total Events</p>
                </div>
                <div className="stat-card">
                    <h3>{userStats.upcomingEvents}</h3>
                    <p>Upcoming Events</p>
                </div>
                <div className="stat-card">
                    <h3>{userStats.completedEvents}</h3>
                    <p>Completed Events</p>
                </div>
            </div>

            <div className="navigation-cards">
                {navigationCards.map((card, index) => (
                    <div key={index} className="nav-card" onClick={card.action}>
                        <span className="card-icon">{card.icon}</span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
