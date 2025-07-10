import { NavLink } from 'react-router-dom';
import { products } from '../data/products';
import './Categories.css';

export function Categories()
{
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <>
            <div className="categoryContainer">
                <h1 className="sectionTitle">Категорії товарів</h1>
                {categories.map(cat =>
                (
                    <NavLink key={cat} to={`/category/${cat}`} className="categoryButton">
                        {cat}
                    </NavLink>
                ))}
            </div>
        </>
    );
}