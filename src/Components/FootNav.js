import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Statistics" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Other Countries" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graphical view" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
