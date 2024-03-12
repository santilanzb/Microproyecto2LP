import React from 'react';
import { useParams } from 'react-router-dom';
import clubData from '../data/clubdata.json';
import videoGameData from '../data/videoGameData.json';
import './ClubPage.css'; 

function ClubPage() {
    const { clubId } = useParams();
    const club = clubData.find(club => club.ID === String(clubId));

    if (!club) {
        return <div className="container">No se encontró el club.</div>;
    }

    const videojuegos = club.videojuegos.map(videojuegoId => {
        const juego = videoGameData[videojuegoId];
        return (
            <div key={juego.Id} className="videojuego-card">
                <div className="videojuego-content">
                    <h3 className="videojuego-title">{juego.titulo}</h3>
                    <p className="videojuego-description">{juego.descripcion}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="club-header">
                <h2>{club.nombre}</h2>
                <p className="club-description">{club.descripcion}</p>
            </div>
            <div className="videojuegos-container">
                <h3 className="videojuegos-header">Videojuegos:</h3>
                <div className="videojuegos-list">
                    {videojuegos}
                </div>
            </div>
        </div>
    );
}

export default ClubPage;
