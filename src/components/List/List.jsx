import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './List.css';

export default function List() {
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const places = [
        {
            name: 'Cool Place'
        },
        {
            name: 'Best Beer'
        },
        {
            name: 'Best Steak'
        },
        {
            name: 'Cool Place'
        },
        {
            name: 'Best Beer'
        },
        {
            name: 'Best Steak'
        },
        {
            name: 'Cool Place'
        },
        {
            name: 'Best Beer'
        },
        {
            name: 'Best Steak'
        },
    ]

    return (
        <div className='container'>
            <Typography variant='h4'>Restaurants, Hotels & Atractions around you</Typography>
            <FormControl className='form-control'>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attracttions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className='form-control'>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className='list'>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}