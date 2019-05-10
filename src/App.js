import React from 'react';
import './App.css';
import BeetleSorter from './Components/Käfer.sorter/BeetleSorter'
import CommunitySection from './Components/Käfer.community/Beetle';
import TopPic from './Components/Pictures/TopPic';
import BottomPic from './Components/Pictures/BottomPic'


function App() {
  return (
    <div className="App">
      <header id='header'>
        <div className="logo">Käfer Chasers</div>
      </header>
      <div>
        <TopPic/>
      </div>
      <body className="middle">
        <BeetleSorter/>
        <div>
          <BottomPic/>
        </div>
        <CommunitySection/>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
