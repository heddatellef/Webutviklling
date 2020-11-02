import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import AddFavourite  from './components/AddFavourite';
import LabelBottomNavigation from './components/Navbar';
import CountrySelect from './components/SearchCountryName';
import ChoseCategory from './components/SearchCategory';


function App() {
  return (
    <div className="App"> 
    <header className="top">
      <LabelBottomNavigation />
    </header>
      <header className="App-header">
        
        <CountrySelect />
        <ChoseCategory />

        <Button color="primary">Search</Button>
        <AddFavourite />
      </header>
      
    </div>
  );
}

export default App;