import React from 'react';
import styles from './Card.module.scss';

function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const opa = () => {
        setIsAdded(isAdded => !isAdded)
    }

    return (
        <div className={styles.card}>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />

            <h5>{props.title}</h5>

            <div className={styles.card__desc}>
                <div className={styles.card__price}>
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>

                <img className={styles.plus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} onClick={opa}  alt="Plus" />
            </div>
        </div>
    );
}

export default Card;