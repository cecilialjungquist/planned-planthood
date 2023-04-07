import Input from "./Input";
import './AddPlant.css';
import Button from "./Button";
import { useContext, useState } from "react";
import { PlantingsContext } from "../App";

function AddPlant() {
    const { allPlantings, setAllPlantings } = useContext(PlantingsContext);
    const [newPlant, setNewPlant] = useState({
        seed: '',
        date: '',
        image: '',
        responsible: ''
    });

    function handleChange(event) {
        setNewPlant(prevPlant => {
            return {
                ...prevPlant,
                [event.target.name]: event.target.value
            }
        })
    }

    function addPlant(e) {
        e.preventDefault();

        if (newPlant.seed && newPlant.date && newPlant.image && newPlant.responsible) {
            setAllPlantings(prevPlantings => [...prevPlantings, newPlant]);
        }

        setNewPlant(prevPlant => {
            return {
                seed: '',
                date: '',
                image: '',
                responsible: ''
            }
        })
    }


    return (
        <section className="add-plant">
            <h2>Lägg till planerade planteringar:</h2>
            <form>
                <h3>Ny sådd:</h3>
                <section className="input__section">
                    <Input type={'text'} label={'Frönamn'} placeholder={'Tomat'} name={'seed'} action={handleChange} value={newPlant.seed} />
                    <Input type={'date'} label={'Datum för sådd'} name={'date'} action={handleChange} value={newPlant.date} />
                    <Input type={'url'} label={'URL, exempelbild'} placeholder={'https://dinbild.com'} name={'image'} action={handleChange} value={newPlant.image} />
                    <Input type={'text'} label={'Planterare'} placeholder={'Emma på 4an'} name={'responsible'} action={handleChange} value={newPlant.responsible} />
                </section>
                <Button type={'add'} text={'Lägg till'} action={addPlant}/>
            </form>
        </section>
    );
}

export default AddPlant;