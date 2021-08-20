import React from 'react';
import axios from 'axios';

import Card from '../components/Card';

function Orders() {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
           const { data } = await axios.get('https://610c7bf666dd8f0017b76dae.mockapi.io/orders');

            console.log(data); 
        })();
    }, []);

    return (
        <div className="content">
            <div className="header-content">
                <h1>Мои заказы</h1>
            </div>
            <div className="cards">
                {
                     [].map((item, index) => (
                        <Card
                            key={index}
                            favorited={true}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders;