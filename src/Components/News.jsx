import './News.css';
import Button from "./Button";
import RoundImage from "./RoundImage";

function News() {

    const url = 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

    return (
        <section className="news">
            <RoundImage url={url} />
            <section>
                <h1>Säsong att så!</h1>
                <p>Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus amet eu elit.</p>
                <Button type={'primary'} text={'så-tips'} />
            </section>
        </section>
    );
}

export default News;