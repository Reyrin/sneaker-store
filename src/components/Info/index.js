import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context';

import styles from './Info.module.scss';

function Info({ title, description, image, width, toHome = false }) {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className={styles.cartEmpty}>
            <img className={styles.box} width={width} src={image} alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            {
                toHome ? (
                    <Link to="/">
                        <button className={styles.btnGreen}>
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </Link>
                ) : (
                    <button className={styles.btnGreen}  onClick={() => setCartOpened(false)}>
                        <img src="/img/arrow.svg" alt="Arrow" />
                        Вернуться назад
                    </button>
                )
            }
        </div>
    );
}

export default Info;

