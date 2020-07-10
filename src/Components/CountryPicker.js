import React ,{useState,useEffect} from 'react';
import {NativeSelect ,FormControl} from  '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        
        marginBottom: '20px',
    },
}));
export default function CountryPicker() {
    
    const classes = useStyles();
    const [Countries, setFetchCountries] = useState([]);
    useEffect(() => {
        async function fetchCountries() {
            const response = await fetch('https://covid19.mathdro.id/api/countries');
            let data = await response.json();
           data =data.countries;
          
            let modifieddata =data.map((country)=>country.name);
            console.log(modifieddata)
            setFetchCountries(modifieddata);
        }
        fetchCountries();
    },[setFetchCountries]);

    return(
        <div className={classes.root} >
           <FormControl>
               <NativeSelect>
                   <option value="global">Global</option>
                   {Countries.map((country,index)=><option key={index} value={country}>{country}</option>)}
               </NativeSelect>
           </FormControl>
        </div>
    )
}
