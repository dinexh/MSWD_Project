import React, { useState } from 'react';
import EventForm from './EventForm';
import './event.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    
    const addEvent = (event) => {
        setEvents([...events, event]);
    };

    return (
        <div className="container">
            <h2>Manage Events</h2>
            <div className="events-container">
                <div className="event-form-container">
                    <EventForm addEvent={addEvent} />
                </div>
                <div className="event-list-container">
                    <h3>Created Events</h3>
                    {events.length > 0 ? (
                        <table className="events-table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, index) => (
                                    <tr key={index}>
                                        <td>{event.name}</td>
                                        <td>{event.date}</td>
                                        <td>{event.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No events created yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Events;
