import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Map from "./pages/Map";
import Devices from "./pages/Devices";
import Device from "./pages/Device";
import General from "./pages/General";
import Live from "./pages/Live";
import Watering from "./pages/Watering";
import Data from "./pages/Data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="map" element={<Map />} />
          <Route path="devices" element={<Devices />} />
          <Route path="devices/device/:id" element={<Device />}>
            <Route path="general" element={<General />} />
            <Route path="live" element={<Live />} />
            <Route path="watering" element={<Watering />} />
            <Route path="data" element={<Data />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
