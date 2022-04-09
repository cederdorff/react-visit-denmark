import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpg";

export default function PlacesToEat() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/placesToEat.json");
            const data = await response.json();
            setPosts(data);
            console.log(data);
        }
        getData();
    }, []);

    return (
        <section className="page">
            <h1>Places To Eat</h1>
            <section className="grid-container">
                {posts.map(post => (
                    <article key={post.Id} onClick={() => navigate(`/places-to-eat/${post.Id}`)}>
                        <img src={post.Files[0] ? post.Files[0].Uri : imagePlaceholder} alt={post.Name} />
                        <h2>{post.Name}</h2>
                        <p>{post.Category.Name}</p>
                    </article>
                ))}
            </section>
        </section>
    );
}
