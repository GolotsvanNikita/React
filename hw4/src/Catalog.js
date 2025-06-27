import './Catalog.css';
import React from 'react';

function Card({text, img})
{
    return(
        <div className='Card'>
            <img src={`./${img}`} alt="img"/>
            <p>{text}</p>
        </div>
    );
}

export function Catalog()
{
    const images = ['1.png', '2.png', '3.png',
        '4.jpg', '5.jpg', '6.jpg', '7.jpg',
        '8.png', '9.jpg', '10.png', '11.jpg',
        '12.jpg', '13.png', '14.png', '15.jpg',
        '16.jpg', '17.jpg', '18.jpg'];

    return(
        <div className='Container'>
            {images.map((filename) =>
            (
                <Card
                    img={filename}
                    text='НАЗВА НАБОРУ'
                />
            ))}
        </div>
    );
}