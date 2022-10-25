import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {Paper, Typography, useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import './Map.css';

export default function Map() {
    const isMobile = useMediaQuery('(min-width: 600px)');

    const containerStyle = {
        width: '100%',
        height: '85vh',
      };

    const coordinates = {
        lat: 0,
        lng: 0,
    }
    return (
        <div className='map-container'>
            <LoadScript googleMapsApiKey='AIzaSyD3Kbavz-Q5_BJdFiLJ8qOOW_mX3UcNtsI'>
                <GoogleMap
                    center={coordinates}
                    zoom={10}
                    margin={[50, 50, 50, 50]}
                    mapContainerStyle={containerStyle}
                    // options={''}
                    // onChange={''}
                    // onChildClick={''}
                >
                </GoogleMap>
            </LoadScript>
        </div>
    )
}