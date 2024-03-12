import React, { useState } from 'react';

function Modal({ onSubmit, onClose }) {
    const [favoriteGame, setFavoriteGame] = useState('');

    const handleFavoriteGameChange = (event) => {
        setFavoriteGame(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(favoriteGame);
    };

    return (
        <div className="modal">
            <h2>Enter Your Favorite Game</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Favorite Game"
                    value={favoriteGame}
                    onChange={handleFavoriteGameChange}
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    );
}

export default Modal;