import React from 'react';

import styles from './Card.module.scss';

function Card({onPlus, onFavorite, title, price, imgUrl, id, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        setIsAdded(isAdded => !isAdded);
        onPlus({ id, title, imgUrl, price });
    }

    const onClickFavorite = () => {
        setIsFavorite(isFavorite => !isFavorite);
        onFavorite({ id, title, imgUrl, price });
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__favorite}>
                <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" onClick={onClickFavorite} />
            </div>
            <img width={133} height={112} src={imgUrl} alt={title} />

            <h5>{title}</h5>

            <div className={styles.card__desc}>
                <div className={styles.card__price}>
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>

                <img className={styles.plus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} onClick={onClickPlus}  alt="Plus" />
            </div>
        </div>
    );
}

export default Card;