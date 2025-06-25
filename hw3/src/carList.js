import React, { useState } from 'react';
import './carList.css';

export function CarListComponent()
{
    const [cars, setCars] = useState([
        { id: 1, brand: 'Toyota', model: 'Camry', year: 2020 },
        { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
        { id: 3, brand: 'Toyota', model: 'Corolla', year: 2021 },
    ]);
    const [filter, setFilter] = useState('');

    const FilterChange = (event) =>
    {
        setFilter(event.target.value);
    };

    const filteredCars = cars.filter(car =>
        filter === '' || car.brand.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="car-list-container">
            <h2 >Car List</h2>
            <input
                type="text"
                placeholder="Filter by brand"
                value={filter}
                onChange={FilterChange}
                className="car-list-container input"
            />
            <ul>
                {filteredCars.map(car =>
                (
                    <li key={car.id}>
                        {car.brand} {car.model} ({car.year})
                    </li>
                ))}
            </ul>
        </div>
    );
}