import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import stats from '../images/download.png'
import world from '../images/world1.png'
const useStyles = makeStyles({
  root: {
     marginTop:'15px',
     marginLeft:'auto',
     marginRight:'auto',
    width: 500,
    justifyContent: 'center',
  },

});

export default function SimpleBottomNavigation({screenConfig}) {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Statistics" icon={<img width="30px" height="30px"alt="Global Stats" src={world}/>} />
      <BottomNavigationAction label="Graphical View" icon={<img width="30px" height="30px" alt="Graphs" src={stats}/>} />

    </BottomNavigation>
  );
}
