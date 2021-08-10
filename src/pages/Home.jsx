import Card from '../components/Card';

function Home({items, setSearchValue, searchValue, onAddToCart, onAddToFavorite, onChangeSearchInput}) {
    return (
        <div className="content">
            <div className="header-content">
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search">
                    <img src="/img/search.svg" alt="Search" />
                    <input placeholder="Поиск..." value={searchValue} onChange={onChangeSearchInput} />
                    {searchValue && <img className="clear" src="/img/btn-remove.svg" alt="Clear" onClick={() => setSearchValue('')} />}
                </div>
            </div>

            <div className="cards">
                {
                    items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={onAddToFavorite}
                            onPlus={onAddToCart}
                            {...item}
                         />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;