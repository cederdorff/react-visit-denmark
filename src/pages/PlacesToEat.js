import { useEffect, useState } from "react";

export default function PlacesToEat() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("./data/placesToEat.json");
            const data = await response.json();
            setPosts(data);
            console.log(data);
        }
        getData();
    }, []);

    return (
        <section>
            <h1>Places To Eat</h1>
            <section className="grid-container">
                {posts.map(
                    post =>
                        post.Files.length > 0 && (
                            <article key={post.Id}>
                                <img src={post.Files[0]?.Uri} alt={post.Name} />
                                <h2>{post.Name}</h2>
                                <p>{post.Category.Name}</p>
                            </article>
                        )
                )}
            </section>
        </section>
    );
}
