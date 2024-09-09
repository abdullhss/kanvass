import './App.css'
import NavBar from './components/NavBar'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddContainer from './components/AddContainer.jsx';
import ConfessionContainer from './components/ConfessionContainer.jsx';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp.jsx';

function App() {
  
  const theme = createTheme({
    palette: {
      mode: 'light', // You can set this to 'dark' for dark mode
      primary: {
        main: '#FF1900', // Primary color
      },
      secondary: {
        main: '#dc004e', // Secondary color
      },
      black : {
        main : "#000" 
      }
    },
    typography: {
      fontFamily: 'Arial, sans-serif', // Customize font family
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <SignUp></SignUp>
        <NavBar></NavBar>
        <AddContainer ></AddContainer>
        <ConfessionContainer></ConfessionContainer>
    </ThemeProvider>
  )
}

export default App ; 
