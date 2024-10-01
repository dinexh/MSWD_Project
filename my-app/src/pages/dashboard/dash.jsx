import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './dash.css';

function Dashboard() {
    const navigate = useNavigate(); 

    const GoToEvents = () => {
        navigate('/events'); 
    };

    return (
        <div className="Dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard! Here you can manage your sports events, track statistics, and more.</p>
            <button onClick={GoToEvents}>
                Events
            </button>
        </div>
    );
}

export default Dashboard;
