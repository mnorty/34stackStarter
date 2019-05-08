import React from 'react';
import './materialize.css'
import './App.css';
import AllEvents from './Components/AllEvents'
import Event from './Components/Event'

function App() {
  return (
    <div className="App">
      <header id='header'>Kafer Chasers</header>
      <div className="paraPic">place holder for picture</div>
      <div className='titleCard'>Beetle Sorter Description</div>
      <body className="beetleSorter">Beetle Sorter goes here</body>
      <div className="paraPic">place holder for picture</div>
      <div className='titleCard'>Describe the Community Section</div>
      <div className="paraPic">place holder for picture</div>
      <div className="displayCard">Beetle go here</div>
        {/* <AllEvents/>
        <Event/> */}
    </div>
  );
}

export default App;
