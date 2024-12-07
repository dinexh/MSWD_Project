import React from 'react';
import './Statistics.css';

function Statistics() {
    const stats = [
        { label: 'Total Games', value: 48 },
        { label: 'Wins', value: 32 },
        { label: 'Losses', value: 16 },
        { label: 'Win Rate', value: '66.7%' },
    ];

    return (
        <div className="statistics-page">
            <h1>Statistics</h1>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-box">
                        <h3>{stat.label}</h3>
                        <p className="stat-value">{stat.value}</p>
                    </div>
                ))}
            </div>
            
            <div className="chart-section">
                <h2>Performance Overview</h2>
                <div className="placeholder-chart">
                    Chart will be implemented here
                </div>
            </div>
        </div>
    );
}

export default Statistics; 