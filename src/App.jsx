import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ClubPage from './pages/Club';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/clubs/:clubId" element={<ClubPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
