import React from 'react';
import { Link } from 'react-router-dom';
import clubData from '../data/clubdata.json';
import './Homepage.css'; // Importamos el archivo CSS para aplicar los estilos

function HomePage() {
    return (
        <div className="container">
            <h2 className="club-list-header">Clubes</h2>
            <div className="club-list">
                {clubData.map(club => (
                    <div key={club.ID} className="club-item">
                        <div className="club-content">
                            <h3 className="club-title">{club.nombre}</h3>
                            <p className="club-description">{club.descripcion}</p>
                            <Link to={`/clubs/${club.ID}`} className="club-link">Ver Club</Link>
                            <button className="subscribe-button">Subscribe</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
