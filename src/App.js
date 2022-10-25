import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css';

export default function App() {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} styles={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </div>
    )
}