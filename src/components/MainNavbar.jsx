import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';


const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <img
       src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="workflow" 
        />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;