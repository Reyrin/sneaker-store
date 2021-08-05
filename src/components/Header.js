function Header() {
    return (
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
    );
}

export default Header;