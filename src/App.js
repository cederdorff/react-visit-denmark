import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "./pages/Categories";
import PlacesToEat from "./pages/PlacesToEat";

function App() {
    return (
        <Routes>
            <Route path="/places-to-eat" element={<PlacesToEat />} />
            <Route path="about" element={<Categories />} />
            <Route path="*" element={<Navigate to="/places-to-eat" />} />
        </Routes>
    );
}

export default App;
