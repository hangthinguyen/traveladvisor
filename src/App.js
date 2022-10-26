import { useEffect, useState } from 'react';
import { CssBaseline} from '@mui/material';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api/Index';
import './App.css';

export default function App() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlacesData();
    },[]);

    return (
        <div>
            <CssBaseline />
            <Header />
            <div style={{ width: '100%'}} className='content-container'>
                <div className='list-items'>
                    <List />
                </div>
                <div className='map'>
                    <Map />
                </div>
            </div>
        </div>
    )
}