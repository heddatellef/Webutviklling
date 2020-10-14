import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core'; 
import { BottomNavigation } from '@material-ui/core'; 
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Favorite, AccessTime } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

function App() {
  return (
    <div className="App"> 
    <header className="top">
      <BottomNavigation showLabels className="navbar">
      <BottomNavigationAction label="Home" value="home" icon={<Home />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Recent" value="recent" icon={<AccessTime />} />
      
    </BottomNavigation>
    </header>
      <header className="App-header">
        <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Club" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Country" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Other"  inputProps={{ 'aria-label': 'description' }} />
        <Button color="primary">Search</Button>
      </header>
      
    </div>
  );
}

export default App;
