
import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Components/Navbar.js'
import InfoPanel from './Components/InfoPanel.js'
import FootNav from './Components/FootNav.js';
import covid from './images/covid.jpg';



const useStyles = makeStyles((theme) => ({
  root: {


    margin:'15px',
  },
 
}));


function App() {
  const screenConfig=useState(0);
  
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
          <Navbar/>
     <InfoPanel currentscreen={screenConfig} />
    <FootNav screenConfig={screenConfig}/>
    </div>
    </div>
  );
}

export default App;
