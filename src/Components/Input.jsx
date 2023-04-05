import './Input.css';

function Input({ type, label, placeholder, name, action }) {

    return ( 
        <section className="input">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} onChange={(event) => action(event)}/>
        </section>
    );
}

export default Input;