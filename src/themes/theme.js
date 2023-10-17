import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0085ff',
        },
        secondary: {
            main: '#0085ff',
        },
        error: {
            main: red.A400,
        },
    },
});
  
export default theme;