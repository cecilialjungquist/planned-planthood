import './Figure.css';

function Figure({ url, type }) {

    const styles = {
        backgroundImage: `url(${url})`,
    }

    return (  
        <figure className={`figure ${type}`} style={styles}></figure>
    );
}

export default Figure;