import './RoundImage.css';

function RoundImage({ url }) {

    const styles = {
        backgroundImage: `url(${url})`,
    }

    return (  
        <figure className="round-image" style={styles}></figure>
    );
}

export default RoundImage;