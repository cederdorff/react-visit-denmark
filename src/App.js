import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Activities from "./pages/Activities";
import Attractions from "./pages/Attractions";
import Categories from "./pages/Categories";
import Events from "./pages/Events";
import PlacesToEat from "./pages/PlacesToEat";
import PlaceToEat from "./pages/PlaceToEat";

export default function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/categories" element={<Categories />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/events" element={<Events />} />
                <Route path="/places-to-eat" element={<PlacesToEat />} />
                <Route path="/places-to-eat/:id" element={<PlaceToEat />} />
                <Route path="*" element={<Navigate to="/categories" />} />
            </Routes>
            <Footer />
        </main>
    );
}
