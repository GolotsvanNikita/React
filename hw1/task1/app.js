const root = ReactDOM.createRoot(document.getElementById('app'));

const book =
{
    Name: 'Road to React',
    Year: 2019,
    Author: 'Robin Wieruch',
    Pages: 138,
    reviews: ['This guide is a delight as a guide in helping me learn React.',
       '\"Road to React\" stands out as an exceptional resource for anyone delving into React development.']
};

root.render
(
    <div className="container">
        <div className="mainInfo">
            <div className="image">
                <img src="reactImg.jpg" alt="reactImg" className="img"/>
            </div>
            <div className="info">
                <p>Name: {book.Name}</p>
                <p>Year: {book.Year}</p>
                <p>Author: {book.Author}</p>
                <p>Pages: {book.Pages}</p>
            </div>
        </div>
        <div className="reviews">
            <h2>Reviews</h2>
            <ul>
                {book.reviews.map((review) =>
                (
                   <li>{review}</li>
                ))}
            </ul>
        </div>
    </div>
)