import {ModalWindow} from "./Components/ModalWindow";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App()
{
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Open</button>
            <ModalWindow show={showModal} close={() => setShowModal(false)}/>
        </>
    )
}

export default App
