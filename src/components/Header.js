import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__left">
                    <img width={40} height={40} src="/img/logo.png" alt="Logo" />
                    <div>
                        <h3>React Sheakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>    
            </Link>
            <ul className="header__right">
                <li onClick={props.onClickCart}>
                    <img src="/img/cart.svg" alt="Cart" />
                    <span>1205 руб.</span>
                </li>
                <Link to="/favorites">
                   <li>
                        <img src="/img/heart.svg" alt="Heart" />
                    </li> 
                </Link>
                <li>
                    <img src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
    );
}

export default Header;