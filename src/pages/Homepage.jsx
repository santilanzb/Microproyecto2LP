// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import clubData from '../data/clubdata.json';

function HomePage() {
    return (
        <div>
            <h2>Clubes</h2>
            <ul>
                {clubData.map(club => (
                    <li key={club.ID}>
                        <Link to={`/clubs/${club.ID}`}>{club.nombre}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
