import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar className='toolbar'>

                <Typography variant='h5' className='title'>
                    Travel Advisor
                </Typography>

                <Box display='flex' className='left-bar-container'>

                    <Typography variant='h6' className='title'>
                        Explore new places
                    </Typography>

                    {/* <Autocomplete> */}
                        <div className='search'>
                            <div className='search-icon'>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='Search...' className='inputInput'/>
                        </div>
                    {/* </Autocomplete> */}

                </Box>

            </Toolbar>
        </AppBar>
    )
}