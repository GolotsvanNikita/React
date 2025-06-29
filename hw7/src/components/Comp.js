import {Outlet, useParams} from 'react-router-dom';

const wonders =
{
    pyramid:
    {
        title: "Great Pyramid of Giza",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    },
    gardens:
    {
        title: "Hanging Gardens of Babylon",
        img: "./22.avif",
    },
    zeus:
    {
        title: "Statue of Zeus at Olympia",
        img: "./33.jpg",
    },
    artemis:
    {
        title: "Temple of Artemis at Ephesus",
        img: "./44.jpg",
    },
    mausoleum:
    {
        title: "Mausoleum at Halicarnassus",
        img: "./5.jpg",
    },
    colossus:
    {
        title: "Colossus of Rhodes",
        img: "./6.webp",
    },
    lighthouse:
    {
        title: "Lighthouse of Alexandria",
        img: "./7.jpg",
    }
};

export function Wonders()
{
    const { id } = useParams();
    const wonder = wonders[id];

    return (
        <div className='card'>
            <h1>{wonder.title}</h1>
            <img src={wonder.img} alt={wonder.title}/>
        </div>
    );
}

export function Biography()
{
    return(
        <div>
            <h1>Biography</h1>
            <h2>Leonardo da Vinci</h2>
            <div className='container'>
                <div>
                    <img src="./leonardo.jpg" alt="img"/>
                </div>
                <div>
                    <p>Leonardo da Vinci can confidently be regarded as one of the unique individuals of our planet..
                        . For he is known not only as one of the greatest artists and sculptors of Italy, but also as a g
                        reat scientist, researcher, engineer, chemist, anatomist, botanist, philosopher, musician, and poet
                        . His creations, discoveries, and research were ahead of their time by more than one era.</p>
                </div>
            </div>
        </div>
    );
}

export function MostFamousPicture()
{
    return(
        <div className='most'>
            <h1>Most Famous Picture</h1>
            <img src="./mona.jpg" alt="img"/>
        </div>
    );
}

export function Collection()
{
    return(
        <div>
            <h1>Collection</h1>
            <div className="collection">
                <img src="./1.jpg" alt="img"/>
                <img src="./2.jpg" alt="img"/>
                <img src="./3.jpg" alt="img"/>
                <img src="./4.jpg" alt="img"/>
            </div>
        </div>
    );
}

export function NotFound()
{
    return(
        <div>
            <h1>NotFound Component</h1>
        </div>
    );
}
