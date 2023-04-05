import './Button.css';

function Button({ type, text, action }) {
    // Type kan vara 'primary', 'delete' eller 'navigation'

    return (  
        <button onClick={text === 'Lägg till' ? (e) => action(e) : null} className={type}>{text}</button>
    );
}

export default Button;