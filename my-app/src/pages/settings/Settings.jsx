import React from 'react';
import './Settings.css';

function Settings() {
    return (
        <div className="settings-page">
            <h1>Settings</h1>
            
            <div className="settings-section">
                <h2>Account Settings</h2>
                <div className="settings-form">
                    <div className="form-group">
                        <label>Email Notifications</label>
                        <div className="toggle-switch">
                            <input type="checkbox" id="email-notifications" />
                            <label htmlFor="email-notifications"></label>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Dark Mode</label>
                        <div className="toggle-switch">
                            <input type="checkbox" id="dark-mode" />
                            <label htmlFor="dark-mode"></label>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Language</label>
                        <select>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="settings-section">
                <h2>Privacy Settings</h2>
                <div className="settings-form">
                    <div className="form-group">
                        <label>Profile Visibility</label>
                        <select>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="friends">Friends Only</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings; 