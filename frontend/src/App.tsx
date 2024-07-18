import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Map from "./pages/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
