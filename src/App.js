import React from 'react';

import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCatOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://610c7bf666dd8f0017b76dae.mockapi.io/items')
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    };

  return (
    <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClickClose={() => setCatOpened(false)} />}
        <Header onClickCart={() => setCatOpened(true)} />
        <div className="content">
            <div className="header-content">
                <h1>Все кроссовки</h1>
                
                <div className="search">
                    <img src="/img/search.svg" alt="Search" />
                    <input placeholder="Поиск..." />
                </div>
            </div>

            <div className="cards">
                {
                    items.map(item => (
                        <Card 
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            onPlus={onAddToCart}
                            onFavorite={() => console.log('fav')}
                         />
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default App;
