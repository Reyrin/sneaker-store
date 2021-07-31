import './App.css';

function App() {
  return (
    <div className="wrapper">
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

        <header className="header">
            <div className="header__left">
                <img width={40} height={40} src="/img/logo.png" alt="Logo" />
                <div>
                    <h3>React Sheakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header__right">
                <li>
                    <img src="/img/cart.svg" alt="Cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/heart.svg" alt="Heart" />
                </li>
                <li>
                    <img src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
        <div className="content">
            <div className="header-content">
                <h1>Все кроссовки</h1>
                
                <div className="search">
                    <img src="/img/search.svg" alt="Search" />
                    <input placeholder="Поиск..." />
                </div>
            </div>

            <div className="cards">
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-1.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-2.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-3.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-4.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-5.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-6.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-7.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-8.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/sn-9.jpg" alt="Sneakers" />

                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                    <div className="card__desc">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>

                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
