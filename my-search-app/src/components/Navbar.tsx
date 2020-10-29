import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import  { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: "100%"

  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('search');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<Home />} />
      <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
}