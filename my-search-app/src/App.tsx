import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core'; 
import { BottomNavigation } from '@material-ui/core'; 
import { Input } from '@material-ui/core';
import { Home, Favorite, AccessTime } from '@material-ui/icons';
import AddFavourite  from './AddFavourite.js';
import LabelBottomNavigation from './Navbar';


function App() {
  return (
    <div className="App"> 
    <header className="top">
      <LabelBottomNavigation />
    </header>
      <header className="App-header">
        <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Club" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Country" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Other"  inputProps={{ 'aria-label': 'description' }} />
        <Button color="primary">Search</Button>
        <AddFavourite />
      </header>
      
    </div>
  );
}

export default App;