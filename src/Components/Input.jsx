import './Input.css';

function Input({ type, label, placeholder, name, value, action }) {
    
    return ( 
        <section className="input">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={(event) => action(event)}/>
        </section>
    );
}

export default Input;