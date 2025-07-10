import { news } from "../data/news";
import { NavLink } from "react-router-dom";

export function NewsList()
{
    return (
        <div className='container'>
            {news.map(n =>
            (
                <div key={n.id} className='card'>
                    <h3>{n.title}</h3>
                    <p>{n.short}</p>
                    <NavLink to={`/news/${n.id}`} className='button'>More</NavLink>
                </div>
            ))}
        </div>
    );
}