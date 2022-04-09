import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const res = await fetch("/data/categories.json");
            const data = await res.json();
            console.log(data);
            setCategories(data);
        }

        getData();
    }, []);

    function navigateTo(categoryName) {
        const path = "/" + categoryName.replaceAll(" ", "-").toLowerCase();
        navigate(path);
    }

    return (
        <section className="page">
            <h1>Categories</h1>
            <section className="grid-container">
                {categories.map(category => (
                    <article key={category.Id} onClick={() => navigateTo(category.Name)}>
                        <img src={category.ImageUrl} alt={category.Name} />
                        <h2>{category.Name}</h2>
                    </article>
                ))}
            </section>
        </section>
    );
}
