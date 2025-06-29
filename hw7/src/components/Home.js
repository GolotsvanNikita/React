import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './Home.css';

export function Home()
{
    return(
        <>
            <div id='nav'>
                <NavLink to='/biography'>Biography</NavLink>
                <NavLink to='/mostFamousPicture'>Most famous picture</NavLink>
                <NavLink to='/collection'>Collection</NavLink>
            </div>
            <div id='outlet'>
                <Outlet/>
            </div>
        </>
    );
}