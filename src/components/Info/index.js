import React from 'react';
import AppContext from '../../context';

import styles from './Info.module.scss';

function Info({ title, description, image }) {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className={styles.cartEmpty}>
            <img className={styles.box} width="120px" height="120px" src={image} alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className={styles.btnGreen}  onClick={() => setCartOpened(false)}>
                <img src="/img/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    );
}

export default Info;

