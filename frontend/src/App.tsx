import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Map from "./pages/Map";
import Devices from "./pages/Devices";
import Device from "./pages/Device/Device";
import General from "./pages/Device/General";
import Live from "./pages/Device/Live";
import Watering from "./pages/Device/Watering";
import Data from "./pages/Device/Data";
import History from "./pages/Device/History";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="map" element={<Map />} />
          <Route path="devices" element={<Devices />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="devices/device/:id" element={<Device />}>
            <Route path="general" element={<General />} />
            <Route path="live" element={<Live />} />
            <Route path="watering" element={<Watering />} />
            <Route path="data" element={<Data />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
