
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Components/Navbar.js'
import InfoBar from './Components/InfoBar.js'
const useStyles = makeStyles((theme) => ({
  root: {

    margin:'15px',
  },
 
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
          <Navbar/>
     <InfoBar/>
    
    </div>
    </div>
  );
}

export default App;
