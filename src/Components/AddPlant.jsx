import Input from "./Input";
import './AddPlant.css';
import Button from "./Button";
import { useContext } from "react";
import { PlantingsContext } from "../pages/Home";

function AddPlant() {
    const { allPlantings, setAllPlantings } = useContext(PlantingsContext);
    let newPlant = {};

    function handleChange(event) {
        newPlant = {
            ...newPlant,
            [event.target.name]: event.target.value
        }
    }

    function addPlant(e) {
        e.preventDefault();

        if (newPlant.seed && newPlant.date && newPlant.image && newPlant.responsible) {
            setAllPlantings(prevPlantings => [...prevPlantings, newPlant]);
        }
    }


    return (
        <section className="add-plant">
            <h2>Lägg till planerade planteringar:</h2>
            <form>
                <h3>Ny sådd:</h3>
                <section className="input__section">
                    <Input type={'text'} label={'Frönamn'} placeholder={'Tomat'} name={'seed'} action={handleChange} />
                    <Input type={'date'} label={'Datum för sådd'} name={'date'} action={handleChange} />
                    <Input type={'url'} label={'URL, exempelbild'} placeholder={'https://dinbild.com'} name={'image'} action={handleChange} />
                    <Input type={'text'} label={'Planterare'} placeholder={'Emma på 4an'} name={'responsible'} action={handleChange} />
                </section>
                <Button type={'primary'} text={'Lägg till'} action={addPlant}/>
            </form>
        </section>
    );
}

export default AddPlant;