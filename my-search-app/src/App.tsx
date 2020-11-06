import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CountrySelect from './components/SearchCountryName';
import ChoseCategory from './components/ChooseCategory';
import CountryTable from './components/CountryTable';



function App() {
  return (
    <div className="App"> 
      <header className="Title-header">
        <h1>World Hapiness Report 2019</h1>
        <br/>
        <p>The World Happiness Report is a landmark survey of the state of global happiness. The report continues to gain global recognition as governments, organizations and civil society increasingly use happiness indicators to inform their policy-making decisions. Leading experts across fields – economics, psychology, survey analysis, national statistics, health, public policy and more – describe how measurements of well-being can be used effectively to assess the progress of nations. <br/><br/> This website provides some of the data for each of the 156 countries that are included in the report. It also allows you to rank the countries by different parameters.</p>
      </header>
      <header className="App-header">  
        <CountrySelect />
        <ChoseCategory />
      </header>
      <CountryTable/>
      <footer>
        <p>© 2020</p>
      </footer>
    </div>
  );
}

export default App;