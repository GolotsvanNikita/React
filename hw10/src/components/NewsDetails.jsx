import { useParams } from "react-router-dom";
import { news } from "../data/news";
import './NewsDetails.css';

export function NewsDetails()
{
    const { id } = useParams();
    const item = news.find(n => n.id === id);

    if (!item) return <div>News not found</div>;

    return (
        <div className='mainContentNews'>
            <h1>{item.title}</h1>
            <p>{item.full}</p>
        </div>
    );
}