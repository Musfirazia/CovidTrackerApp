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

export default function GlobalState() {
    const classes = useStyles();
    const [globalData, setglobalData] = useState({});
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            delete data.results[0].source;
            console.log(data);
            setglobalData(data.results[0]);

        }
        getData();
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globalData).map((key , ind) => {
                    return (
                       
                        
                        <Grid item xs={12} sm={4} key={ind} >
                            <Paper className={classes.paper} elevation={3} ><h3 className={classes.title}>{ key.replace(/_/g,' ')}</h3><h3>{globalData[key]} </h3></Paper>
                        </Grid>
                    )})
                }
            </Grid>
        </div>
    );
}
