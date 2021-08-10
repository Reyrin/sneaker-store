import styles from './Drawer.module.scss';

function Drawer({onClickClose, onRemove, items = []}) {
    return (
        <div className={styles.overlay}>
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
                                    <div className={styles.cart__item}>
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
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>74 руб.</b>
                                </li>
                            </ul>
                            <button className={styles.btnGreen}>
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={styles.cartEmpty}>
                        <img className={styles.box} width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                        <h2>Корзина пустая</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className={styles.btnGreen}  onClick={onClickClose}>
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;