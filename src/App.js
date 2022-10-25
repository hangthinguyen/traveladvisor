import { CssBaseline } from '@mui/material/CssBaseline';
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
            <Grid></Grid>
        </div>
    )
}