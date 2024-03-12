import React, { useState } from 'react';
import videoGameData from '../data/videoGameData.json'; // Import the JSON file
import './Search.css';

function SearchView() {
    // Convert the videoGameData object into an array
    const videoGamesArray = Object.values(videoGameData);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(videoGamesArray); // Initialize with all video games

    const handleSearch = () => {
        // Filter the video games based on the search term
        const results = videoGamesArray.filter(game =>
            game.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search video games"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {searchResults.map((game) => (
                <div key={game.Id}>
                    <h2>{game.titulo}</h2>
                    <p>{game.descripcion}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchView;