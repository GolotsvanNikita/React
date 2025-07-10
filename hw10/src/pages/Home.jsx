import {products} from "../data/products";
import {NavLink} from 'react-router-dom';
import { Categories } from '../components/Categories';
import './Home.css';
import {NewsList} from "../components/NewsList.jsx";

export function Home()
{
    return(
        <div className='mainContent'>
            <h1 className='title'>Scooters store</h1>
            <Categories />
            <div className='container'>
                {products.map(product =>
                (
                    <div key={product.id} className='card'>
                        <img src={product.image} alt="img"/>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <NavLink to={`/product/${product.id}`} className='button'>More</NavLink>
                    </div>
                ))};
            </div>
            <h2 className='latest'>Latest news</h2>
            <NewsList />
        </div>
    );
}