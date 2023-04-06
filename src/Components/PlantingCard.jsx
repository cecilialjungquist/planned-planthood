import './PlantingCard.css';
import Button from "./Button";
import Figure from './Figure';
import { Link } from 'react-router-dom';

function PlantingCard({ planting }) {

    return (
        <article className="planting-card">
            <Link to='planting' state={planting}>
                <Figure url={planting.image} />
            </Link>
            <section>
                <h4>{planting.seed}</h4>
                <time dateTime={planting.date}>{planting.date}</time>
            </section>
            <section>
                <p>{planting.responsible}</p>
                <Button type={'delete'} text={'ta bort'} plantingObj={planting} />
            </section>
        </article>
    );
}

export default PlantingCard;