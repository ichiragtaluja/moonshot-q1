import "./App.css";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Continent } from "./pages/Continent/Continent";
import { Destinations } from "./pages/Destinations/Destinations";
import { DestinationDetail } from "./pages/DestinationDetail/DestinationDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:continentId" element={<Continent />} />
        <Route
          path="/countries/:continentId/:countryId"
          element={<Destinations />}
        />
        <Route
          path="/countries/:continentId/:countryId/:destinationId"
          element={<DestinationDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
