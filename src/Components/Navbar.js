import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import covid from '../images/image.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '20px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
 textTransform:'uppercase',
 fontSize:'25px',
 fontStyle:'Italic',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    
   
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
 
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                 <img src={covid} alt="Covid-19" /> 

                    <Typography className={classes.title} variant="h6" noWrap>
                        Covid - 19 Tracker App
          </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}
