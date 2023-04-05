import './PlantingCard.css';
import Button from "./Button";
import Figure from './Figure';

function PlantingCard({ planting }) {

    return (
        <article className="planting-card">
            <Figure url={planting.image} />
            <section>
                <h4>{planting.seed}</h4>
                <time dateTime={planting.date}>{planting.date}</time>
            </section>
            <section>
                <p>{planting.responsible}</p>
                <Button type={'delete'} text={'ta bort'} />
            </section>
        </article>
    );
}

export default PlantingCard;