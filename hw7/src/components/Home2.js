import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './Home2.css';

export function Home2()
{
    return(
        <>
            <div className="container">
                <div id='nav'>
                    <NavLink to='/pyramid'>Great Pyramid of Giza</NavLink>
                    <NavLink to='/gardens'>Hanging Gardens of Babylon</NavLink>
                    <NavLink to='/zeus'>Statue of Zeus at Olympia</NavLink>
                    <NavLink to='/artemis'>Temple of Artemis at Ephesus</NavLink>
                    <NavLink to='/mausoleum'>Mausoleum at Halicarnassus</NavLink>
                    <NavLink to='/colossus'>Colossus of Rhodes</NavLink>
                    <NavLink to='/lighthouse'>Lighthouse of Alexandria</NavLink>
                </div>
                <div id='outlet'>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}