import React, {useState} from 'react'
import {  GlobalStyles, Register } from './components';
import { useRoutes, Route, Routes } from 'react-router-dom';
 import routes from './routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';





const App = () => {
  const{ user} = JSON.parse(localStorage.getItem('profile'));
  const routing = useRoutes(routes(user));
  return (
    <ThemeProvider theme={theme}>
  <GlobalStyles/>
 
    {routing}
  </ThemeProvider>
  )
}

export default App