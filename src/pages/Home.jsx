import React from 'react';
import Card from '../components/Card';

function Home({items, setSearchValue, searchValue, onAddToCart, onAddToFavorite, onChangeSearchInput, isLoading}) {
    const renderItems = () => {
        const filttredItems = items.filter((item) => 
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        return (isLoading ? [...Array(12)] : filttredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={onAddToFavorite}
                onPlus={onAddToCart}
                loading={isLoading}
                {...item}
            />
        ));
    }

    return (
        <div className="content">
            <div className="header-content">
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search">
                    <img src="img/search.svg" alt="Search" />
                    <input placeholder="Поиск..." value={searchValue} onChange={onChangeSearchInput} />
                    {searchValue && <img className="clear" src="img/btn-remove.svg" alt="Clear" onClick={() => setSearchValue('')} />}
                </div>
            </div>

            <div className="cards">
                {renderItems()}
            </div>
        </div>
    );
}

export default Home;