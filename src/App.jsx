import React, {useState} from 'react'
 import { Route, Routes, useRoutes} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';

import {
    GlobalStyles,
    Login,
    Register,
    Navbar,
    ActivateUser,
    NotFound
} from './components';
import routes from './routes';
import theme from './theme/theme';


const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const routing = useRoutes(routes(user));

    return (
        <ThemeProvider theme={theme}>
            {/* <GlobalStyles/> */}
            {routing} 
            </ThemeProvider>
      
    )
}

export default App
