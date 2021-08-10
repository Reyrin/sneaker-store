import Card from '../components/Card';

function Favorites({favorites, onAddToFavorite}) {
    return (
        <div className="content">
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
        </div>
    );
}

export default Favorites;