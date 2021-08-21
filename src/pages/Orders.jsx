import React from 'react';
import axios from 'axios';

import Card from '../components/Card';

import AppContext from '../context';

function Orders() {
    const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);

    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://610c7bf666dd8f0017b76dae.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);    
            } catch (error) {
                alert('Ошибка при запросе заказа :(');
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className="content">
            <div className="header-content">
                <h1>Мои заказы</h1>
            </div>
            <div className="cards">
                {
                    (isLoading ? [...Array(12)] : orders).map((item, index) => (
                        <Card
                            key={index}
                            loading={isLoading}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders;