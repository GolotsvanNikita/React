import React from "react";
import './GreatPerson.css';
import {Portrait} from "./Portrait";
import {PersonInfo} from "./PersonInfo";
import {Biography} from "./Biography";

export class GreatPerson extends React.Component
{
    render()
    {
        return(
            <div className='mainContent'>
                <h1>Great Person</h1>
                <Portrait
                    image='./Einstein.jpg'
                />
                <PersonInfo
                    name='Albert Einstein'
                    birth="March 14, 1879"
                />
                <Biography
                    biography='Albert Einstein was a theoretical physicist who developed the theory of relativity,
                         one of the two pillars of modern physics.
                         He received the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect.'
                />
            </div>
        );
    }
}