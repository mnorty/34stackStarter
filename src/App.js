import React from 'react';
import './App.css';
import BeetleSorter from './Components/Käfer.sorter/BeetleSorter'
import CommunitySection from './Components/Käfer.community/Pokemon';
import TopPic from './Components/Pictures/TopPic';


function App() {
  return (
    <div className="App">
      <header id='header'>Kafer Chasers</header>
      <body className="middle">
        {/* <div className="paraPic">place holder for picture</div> */}
        <TopPic/>
        <BeetleSorter/>
        <div className="paraPic">place holder for picture</div>
        <CommunitySection/>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
