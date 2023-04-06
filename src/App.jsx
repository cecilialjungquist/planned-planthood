import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Planting from './pages/Planting';
import Home from './pages/Home';
import { createContext, useState } from "react";
import { data } from './assets/plannedplanthood.js';

export const PlantingsContext = createContext();

function App() {
  const [allPlantings, setAllPlantings] = useState(data);

  return (
  <PlantingsContext.Provider value={{ allPlantings, setAllPlantings }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home är default */}
            <Route index element={<Home />} />
            <Route path="planting" element={<Planting />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </PlantingsContext.Provider >

  )
}

export default App;