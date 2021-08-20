import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context';

import styles from './Header.module.scss';

function Header(props) {
    const { cartItems } = React.useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);


    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.header__left}>
                    <img width={40} height={40} src="/img/logo.png" alt="Logo" />
                    <div>
                        <h3>React Sheakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>    
            </Link>
            <ul className={styles.header__right}>
                <li onClick={props.onClickCart}>
                    <img src="/img/cart.svg" alt="Cart" />
                    <span>{totalPrice} руб.</span>
                </li>
                <Link to="/favorites">
                   <li>
                        <img src="/img/heart.svg" alt="Heart" />
                    </li> 
                </Link>
                <Link to="/orders">
                    <li>
                        <img src="/img/user.svg" alt="User" />
                    </li>
                </Link>
                
            </ul>
        </header>
    );
}

export default Header;