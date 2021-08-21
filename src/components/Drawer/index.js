import React from 'react';
import axios from 'axios';
import Info from '../Info';

import AppContext from '../../context';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClickClose, onRemove, items = [], opened}) {
    const { cartItems, setCartItems } = React.useContext(AppContext);

    if (opened) {
        document.body.style.overflow = "hidden"
    }

    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://610c7bf666dd8f0017b76dae.mockapi.io/orders', {
                items: cartItems
            });

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://610c7bf666dd8f0017b76dae.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
            
            setOrderId(data.id);
            setCartItems([]);
            setIsOrderComplete(true);

        } catch (error) {
            alert('Ошибка при создании заказа :(')
        }

        setIsLoading(false);
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2>
                    Корзина 
                    <img src="/img/btn-remove.svg" alt="Close" onClick={onClickClose} />
                </h2>

                {items.length > 0 ? (
                    <>
                        <div className={styles.cart}>
                            {
                                items.map(item => (
                                    <div key={item.id} className={styles.cart__item}>
                                        <div 
                                        className={styles.cart__img}
                                        style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                                        <div className={styles.cart__desc}>
                                            <p className={styles.cart__title}>{item.title}</p>
                                            <b className={styles.cart__price}>{item.price}</b>
                                        </div>
                                        <img className={styles.cart__remove} src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemove(item.id)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.cartTotal}>
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{totalPrice / 20} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} className={styles.btnGreen} onClick={onClickOrder}>
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <Info 
                        title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'} 
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'} 
                        image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'} 
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;