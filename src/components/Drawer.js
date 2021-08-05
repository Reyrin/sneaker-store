function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина <img src="/img/btn-remove.svg" alt="Remove" /></h2>
                <div className="cart">
                    <div className="cart__item ">
                        <div 
                        className="cart__img"
                        style={{ backgroundImage: 'url(/img/sneakers/sn-1.jpg)' }}></div>
                        
                        <div className="cart__desc">
                            <p className="cart__title">Мужские Кроссовки Nike Air Max 270</p>
                            <b className="cart__price">12 999 руб.</b>
                        </div>

                        <img className="cart__remove" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cart__item ">
                        <div 
                        className="cart__img"
                        style={{ backgroundImage: 'url(/img/sneakers/sn-1.jpg)' }}></div>
                        
                        <div className="cart__desc">
                            <p className="cart__title">Мужские Кроссовки Nike Air Max 270</p>
                            <b className="cart__price">12 999 руб.</b>
                        </div>

                        <img className="cart__remove" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                </div>

                <div className="cart-total">
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
                    <button className="btn-green">
                        Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;