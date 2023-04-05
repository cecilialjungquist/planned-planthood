import { createContext, useState } from "react";
import AddedPlants from "../Components/AddedPlants";
import AddPlant from "../Components/AddPlant";
import News from "../Components/News";
import { data } from '../assets/plannedplanthood.js';

export const PlantingsContext = createContext();

function Home() {
    const [allPlantings, setAllPlantings] = useState(data);
    console.log(allPlantings);

    return (  
        <PlantingsContext.Provider value={{ allPlantings, setAllPlantings }}>
            <News />
            <AddPlant />
            <AddedPlants />
        </PlantingsContext.Provider>
    );
}

export default Home;