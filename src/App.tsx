import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroPage from "./pages/HeroPage";
import Layout from "./pages/Layout";
import MainApp from "./pages/MainApp";
import CitiesPage from "./pages/CitiesPage";
import SittingPage from "./pages/SittingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/app" element={<Layout />}>
          <Route path="" element={<MainApp />} />
          <Route path="cities" element={<CitiesPage />} />
          <Route path="sitting" element={<SittingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
