import { createTheme  } from '@mui/material/styles';
import { colors } from '@mui/material';
import shadows from './shadows';
import typography from './typography';


const theme = createTheme({
    palette: {
      background: {
        default: '#F4F6F8',
        paper: colors.common.white
      },
      primary: {
        contrastText: '#ffffff',
        main: '#334155'
      },
      text: {
        primary: '#6b7280',
        secondary: '1f2937'
      }
    },
    shadows,
    typography
  });

export default theme