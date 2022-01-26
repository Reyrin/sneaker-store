import React from 'react';
import ContentLoader from "react-content-loader"

import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({
    onPlus, 
    onFavorite, 
    title, 
    price, 
    imgUrl, 
    id, 
    favorited = false, 
    loading = false
}) {
    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = { id, parentId: id, title, imgUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    }

    const onClickFavorite = () => {
        setIsFavorite(isFavorite => !isFavorite);
        onFavorite(obj);
    }

    return (
        <div className={styles.card}>
        {
            loading ? (
                <ContentLoader
                speed={2}
                width={155}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
                {
                    onFavorite && (
                        <div className={styles.card__favorite}>
                            <img src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Unliked" onClick={onClickFavorite} />
                        </div>
                    )
                }
                <img width='100%' height={135} src={imgUrl} alt={title} />

                <h5>{title}</h5>

                <div className={styles.card__desc}>
                    <div className={styles.card__price}>
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    {
                        onPlus && (
                            <img 
                            className={styles.plus} 
                            src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'} 
                            onClick={onClickPlus}  alt="Plus" 
                            />
                        )
                    }
                </div>
                </>
            )
        }
            
        </div>
    );
}

export default Card;