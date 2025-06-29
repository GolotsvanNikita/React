import './Restoraunt.css';
import {useState} from "react";

export function Restoraunt(props)
{
    const [state, setState] = useState(
        {name: props.name,
        address: props.address,
        type: props.typeOfKitchen,
        rating: props.rating});

    return(
        <div className='main'>
            <div className='content'>
                <div>
                    <h1>{state.name}</h1>
                    <img src={props.img} alt="img"/>
                </div>
                <div>
                    <p>Address: {state.address}</p>
                    <p>Type of kitchen: {state.type}</p>
                    <p>Rating: {state.rating}</p>
                </div>
            </div>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={(e) => setState({ ...state, name: e.target.value})}
                    />
                </label>

                <label>
                    Rating:
                    <input
                        type="number"
                        min="1"
                        max="5"
                        step="0.1"
                        onChange={(e) => setState({ ...state, rating: e.target.value})}
                    />
                </label>

                <label>
                    Address:
                    <input
                        type="text"
                        onChange={(e) => setState({ ...state, address: e.target.value})}
                    />
                </label>

                <label>
                    Kitchen Of Type:
                    <input
                        type="text"
                        onChange={(e) => setState({ ...state, type: e.target.value})}
                    />
                </label>
            </form>
        </div>
    );
}