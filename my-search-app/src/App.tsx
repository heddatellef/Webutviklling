import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import AddFavourite  from './components/AddFavourite';
import CountrySelect from './components/SearchCountryName';
import ChoseCategory from './components/SearchCategory';
import CountryTable from './components/CountryTable';



function App() {
  return (
    <div className="App"> 
      <header className="App-header">  
        <CountrySelect />
      
        <ChoseCategory />

        
        <AddFavourite />
      </header>
      <CountryTable/>
      <footer>
        <p>© 2020</p>
      </footer>
    </div>
  );
}

export default App;