import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/attractions">Attractions</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/places-to-eat">Places To Eat</NavLink>
        </nav>
    );
}
