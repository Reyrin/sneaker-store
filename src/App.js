import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

let products = [
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '12 999 руб.',
        imgUrl: '/img/sneakers/sn-1.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: '8 999 руб.',
        imgUrl: '/img/sneakers/sn-2.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '8 499 руб.',
        imgUrl: '/img/sneakers/sn-3.jpg'
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: '8 999 руб.',
        imgUrl: '/img/sneakers/sn-4.jpg'
    },
    {
        title: 'Мужские Кроссовки Under Armour Curry 8',
        price: '15 199 руб.',
        imgUrl: '/img/sneakers/sn-5.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Kyrie 7',
        price: '11 299 руб.',
        imgUrl: '/img/sneakers/sn-6.jpg'
    },
    {
        title: 'Мужские Кроссовки Jordan Air Jordan 11',
        price: '16 499 руб.',
        imgUrl: '/img/sneakers/sn-7.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Lebron XVIII Low',
        price: '13 999 руб.',
        imgUrl: '/img/sneakers/sn-8.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: '8 999 руб.',
        imgUrl: '/img/sneakers/sn-9.jpg'
    },
];

function App() {
  return (
    <div className="wrapper">
        <Drawer />
        <Header />
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
                    products.map(item => (
                        <Card 
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                         />
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default App;
