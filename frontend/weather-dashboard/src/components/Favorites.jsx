import React, { useState, useEffect } from 'react';

const Favorites = ({ onRemoveFavorite }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/favorites')
      .then((response) => response.json())
      .then((data) => setFavorites(data || []))
      .catch((error) => console.error('Error fetching favorites:', error));
  }, []);

  const handleRemove = (city) => {
    onRemoveFavorite(city);
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.city}
              <button onClick={() => handleRemove(favorite.city)}>Remove</button>
            </li>
          ))
        ) : (
          <li>No favorites yet</li>
        )}
      </ul>
    </div>
  );
};

export default Favorites;