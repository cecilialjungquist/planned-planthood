import './Header.css';

function Header({ title }) {
    return (  
        <header className="header--main">
            <h2>{title}</h2>
        </header>
    );
}

export default Header;