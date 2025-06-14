const root = ReactDOM.createRoot(document.getElementById('app'));

const band =
{
    name: "Imagine Dragons",
    members: ["Dan Reynolds", "Wayne Sermon", "Ben McKee", "Daniel Platzman"],
    albums:
    [
        {
            title: "Night Visions",
            cover: "Night_Visions.jpeg"
        },
        {
            title: "Smoke + Mirrors",
            cover: "Smoke+Mirrors.jpg"
        },
        {
            title: "Evolve",
            cover: "ImagineDragonsEvolve.jpg"
        }
    ]
};

root.render
(
    <div>
        <h1>{band.name}</h1>

        <h2>Members</h2>
        <ul>
            {band.members.map((member) =>
            (
                <li>{member}</li>
            ))}
        </ul>

        <h2>Albums</h2>
        <div>
            {band.albums.map((album) =>
            (
                <div className="album">
                    <h4>{album.title}</h4>
                    <img src={album.cover} alt={album.title} />
                </div>
            ))}
        </div>
    </div>
);