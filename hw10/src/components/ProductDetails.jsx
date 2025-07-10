import {useParams, NavLink, useNavigate, Link} from 'react-router-dom';
import {products} from "../data/products";
import './ProductDetails.css';
import {useEffect} from "react";

export function ProductDetails()
{
    const {id} = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);

    useEffect(() =>
    {
        if (!product)
        {
            navigate('/', { replace: true });
        }
    }, [product, navigate]);

    if (!product)
    {
        return <div>Redirecting...</div>;
    }

    return(
        <div className='productPageMain'>
            <div className='backBtn'>
                <NavLink to={'/'}>Back</NavLink>
            </div>
            <h2>{product.name}</h2>
            <div className='content'>
                <div className='image-block'>
                    <img src={product.image} alt="img" />
                    <p className='price'>{product.price}</p>
                </div>

                <p>{product.fullDescription}</p>
            </div>
        </div>
    );
}