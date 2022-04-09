import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpg";

export default function PlaceToEat() {
    const params = useParams();
    const placeId = parseInt(params.id);
    const [place, setPlace] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/placesToEat.json");
            const data = await response.json();

            const placeData = data.find(item => item.Id === placeId);
            setPlace(placeData);
            console.log(placeData);
        }
        if (placeId) {
            getData();
        }
    }, [placeId]);

    return (
        <section className="page">
            <h1>{place?.Name}</h1>
            <img src={place.Files?.length ? place?.Files[0]?.Uri : imagePlaceholder} alt={place.Name} />
            <h4>Category: {place.Category?.Name}</h4>
            {place.Descriptions?.map(description => (
                <article key={description.DescriptionTypeID} dangerouslySetInnerHTML={{ __html: description.Html }}></article>
            ))}
        </section>
    );
}
