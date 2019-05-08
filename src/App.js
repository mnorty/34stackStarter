import React from 'react';
import './App.css';
import BeetleSorter from './Components/BeetleSorter'
import CommunitySection from './Components/CommunitySection';


function App() {
  return (
    <div className="App">
      <header id='header'>Kafer Chasers</header>
      <body className="middle">
        <div className="paraPic">place holder for picture</div>
        <BeetleSorter/>
        <div className="paraPic">place holder for picture</div>
        <CommunitySection/>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
