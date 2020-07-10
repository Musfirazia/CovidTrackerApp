import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
    title:{
       color:'blue',
       textTransform:'Capitalize' 
    }
}));

export default function AllCountries() {
    const classes = useStyles();
    const [globalData, setglobalData] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setglobalData(Object.values(Object.values(data.countryitems)[0]));
            console.log(Object.values(Object.values(data.countryitems)[0]))

        }
        getData();
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globalData).map((key , ind) => {
                    return (
                       
                        
                        <Grid item xs={12} sm={4} key={ind} >
 <tr key={ind}>
                                <th className={classes.title}>
                                    {globalData[ind].title}
                                </th>
                                <td>
                                    {globalData[ind].total_cases}
                                </td>
                                <td>
                                    {globalData[ind].total_active_cases}
                                </td>
                            </tr>
                        </Grid>
                    )})
                }
            </Grid>
        </div>
    );
}
