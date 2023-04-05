import './PlantingCard.css';
import Button from "./Button";

function PlantingCard({ planting }) {

    const styles = {
        backgroundImage: `url(${planting.image})`,
    }

    return (
        <article className="planting-card">
            <figure style={styles}></figure>
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