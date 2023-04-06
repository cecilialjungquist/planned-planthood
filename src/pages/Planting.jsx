import { Link, useLocation } from "react-router-dom";
import Button from "../Components/Button";
import Figure from "../Components/Figure";

function Planting() {

    const location = useLocation();
    const planting = location.state;

    return (  
        <section className="planting-page">
            <h2>Plantering för:</h2>
            <h1>{planting.seed}</h1>

            <article>
                <Figure url={planting.image} type={'round'} />
                <h3>Datum: {planting.date}</h3>
                <p>Planteringsansvarig är:</p>
                <p className="responsible">{planting.responsible}</p>
            </article>
            <Link to='/'>
                <Button type={'navigation'} text={'Gå tillbaka'} />
            </Link>
        </section>
    );
}

export default Planting;