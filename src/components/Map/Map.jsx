import { GoogleMap, LoadScript } from '@react-google-maps/api'
import {Paper, Typography, useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import './Map.css';

export default function Map() {
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = {
        lat: 0,
        lng: 0,
    }
    return (
        <div className='map-container'>
            <LoadScript googleMapsApiKey='AIzaSyD3Kbavz-Q5_BJdFiLJ8qOOW_mX3UcNtsI'>
                <GoogleMap
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    // options={''}
                    // onChange={''}
                    // onChildClick={''}
                >
                </GoogleMap>
            </LoadScript>
        </div>
    )
}