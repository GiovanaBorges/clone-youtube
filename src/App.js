import React from 'react';
import './App.css';
import { ThemeProvider , Button, createMuiTheme,makeStyles } from '@material-ui/core';
import Home from './Home';
function App() {

  
  const theme = createMuiTheme({
    palette: {
      content: {
        main: '#282828'
      },
      secondary:{
        main : '#303030'
      },
      primary:{
        main : '#A60311'
      },
      white:{
        main : 'white',
        secondary : '##BFBAAD'
      },
    }
      });


  return (
    <ThemeProvider theme={theme}>
      <Home ></Home>
    </ThemeProvider>
  );
  }

  
export default App;
