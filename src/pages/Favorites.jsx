import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

import Info from '../components/Info';

function Favorites() {
    const {favorites, onAddToFavorite} = React.useContext(AppContext);

    return (
        <div className="content">
            <div className="header-content">
                <h1>Мои закладки</h1>
            </div>
            {
                favorites.length > 0 ? (
                    <div className="cards">
                        {
                            favorites.map((item, index) => (
                                <Card
                                    key={index}
                                    favorited={true}
                                    onFavorite={onAddToFavorite}
                                    {...item}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <Info
                        title={'Закладок нет :('}
                        description={'Вы ничего не добавляли в закладки'}
                        image={'img/no-favorites.jpg'}
                        width={'70px'}
                        toHome={true}
                    />
                )
            }
            
        </div>
    );
}

export default Favorites;