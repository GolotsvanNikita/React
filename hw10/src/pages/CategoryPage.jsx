import { useParams, NavLink } from 'react-router-dom';
import { products } from '../data/products';

export function CategoryPage()
{
    const { category } = useParams();
    const filtered = products.filter(p => p.category === category);

    return (
        <div className="mainContent">
            <h1 className="sectionTitle">{category}</h1>
            <div className="container">
                {filtered.map(product =>
                (
                    <div key={product.id} className="card">
                        <img src={product.image} alt="img" />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <NavLink to={`/product/${product.id}`} className="categoryButton">More</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}