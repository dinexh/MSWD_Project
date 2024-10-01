import React, { useState } from 'react';
import './eventForm.css';

const EventForm = ({ addEvent }) => { // Accept addEvent as a prop
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            name: eventName,
            date: eventDate,
            location: eventLocation,
        };
        addEvent(newEvent);
        setEventName('');
        setEventDate('');
        setEventLocation('');
    };

    return (
        <form onSubmit={handleSubmit} className="event-form">
            <label>
                Event Name:
                <input 
                    type="text" 
                    value={eventName} 
                    onChange={(e) => setEventName(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Date:
                <input 
                    type="date" 
                    value={eventDate} 
                    onChange={(e) => setEventDate(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Location:
                <input 
                    type="text" 
                    value={eventLocation} 
                    onChange={(e) => setEventLocation(e.target.value)} 
                    required 
                />
            </label>
            <button type="submit">Create Event</button>
        </form>
    );
};

export default EventForm;
