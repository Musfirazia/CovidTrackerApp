import React from 'react';
import GlobalState from './GlobalState.js';
import CountriesStats from './CountriesStats.js';
export default function InfoPanel(props) {
 if(props.currentscreen[0] === 0)
   { return (
       <GlobalState/>    
    );
   }
   else {
       return(<CountriesStats/>)
   }
}