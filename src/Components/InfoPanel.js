import React from 'react';

import GlobalState from './GlobalState.js'
import AllCountries from './AllCountries.js';
import CountriesStats from './CountriesStats.js';

import Chart from './Chart.js'
export default function InfoPanel(props) {
    console.log(props.currentscreen[0])
 if(props.currentscreen[0] === 0)
   { return (
       <GlobalState/>    
    );
   }
   else if(props.currentscreen[0] === 1)
{
    return(<AllCountries/>)
}
   else {
       return(<CountriesStats/>)
   }
}