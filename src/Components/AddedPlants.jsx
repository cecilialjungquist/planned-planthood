import './AddedPlants.css';
import { useContext } from "react";
import { PlantingsContext } from "../pages/Home";
import PlantingCard from "./PlantingCard";


function AddedPlants() {
    const { allPlantings, setAllPlantings } = useContext(PlantingsContext);

    let elements = allPlantings.map((planting, i) => <PlantingCard planting={planting} key={i} />)

    return (
        <section className="added-plants">
            <h2>Våra planerade planteringar</h2>
            <section>
                {elements}
            </section>
        </section>
    );
}

export default AddedPlants;