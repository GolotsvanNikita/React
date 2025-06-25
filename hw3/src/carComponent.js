import React, { useState } from 'react';
import './carComponent.css';

export function CarComponent()
{
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="car-container">
            <h2>My Car</h2>
            <p>Description: This is a reliable car for daily use.</p>
            <button
                onClick={() => setShowDetails(!showDetails)}
                className="car-container button"
            >
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails &&
            (
                <div className="car-details">
                    <p>Brand: Toyota</p>
                    <p>Year: 2020</p>
                    <p>Color: Blue</p>
                </div>
            )}
        </div>
    );
}