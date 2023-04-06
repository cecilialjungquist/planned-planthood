import './AddedPlants.css';
import { useContext } from "react";
import PlantingCard from "./PlantingCard";
import { PlantingsContext } from '../App';


function AddedPlants() {
    const { allPlantings, setAllPlantings } = useContext(PlantingsContext);

    let elements = allPlantings.map((planting, i) => <PlantingCard planting={planting} key={i} />)

    return (
        <section className="added-plants">
            <h2>Våra planerade planteringar</h2>
            <section>
                {elements.length ? elements : <p>Inga planerade planteringar...</p>}
            </section>
        </section>
    );
}

export default AddedPlants;