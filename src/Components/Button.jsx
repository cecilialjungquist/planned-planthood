import { useContext } from 'react';
import { PlantingsContext } from '../App';
import './Button.css';

function Button({ type, text, action, plantingObj }) {
    // Type kan vara 'primary', 'add', 'delete' eller 'navigation'

    const {allPlantings, setAllPlantings} = useContext(PlantingsContext);
    
    function handleAction(e) {
        if (type === 'add') {
            action(e);
        } else if (type === 'delete') {
            setAllPlantings(prevPlantings => prevPlantings.filter(planting => planting !== plantingObj));
        }
    }

    return (  
        <button onClick={(e) => handleAction(e)} className={type}>{text}</button>
    );
}

export default Button;