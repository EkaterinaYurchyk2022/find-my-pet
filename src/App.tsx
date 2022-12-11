import './App.css';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import {Main} from './views/main';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
} from 'react-router-dom';
import {AddPetForm} from './maps/mapbox/add-pet-form';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWthYmFub3YiLCJhIjoiY2w3MGJlbHd5MGNxZzN3cmwxN2F6bGZxMCJ9.z6oW3CWUf_WNwPeENzMsFw';

const App: React.FC = () => {
    return (
        <div className="app p-5">
            Find my pet

            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> |{' '}
                    <Link to="/add-mapbox">Add via Mapbox</Link>
                </nav>
                <Routes>
                    <Route path="/add-leaflet"/>
                    <Route path="/add-mapbox" element={<AddPetForm/>}/>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
