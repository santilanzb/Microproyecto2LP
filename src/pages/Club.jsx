import React from 'react';
import { useParams } from 'react-router-dom';
import clubData from '../data/clubdata.json';

function ClubPage() {
    const { clubId } = useParams();
    const club = clubData.find(club => club.ID === clubId);

    if (!club) {
        return <div>No se encontró el club.</div>;
    }

    return (
        <div>
            <h2>{club.nombre}</h2>
            <p>{club.descripcion}</p>
            <h3>Videojuegos:</h3>
            <ul>
                {club.videojuegos.map(videojuegoId => (
                    <li key={videojuegoId}>{videojuegoId}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClubPage;