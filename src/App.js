import React from 'react';
import './materialize.css'
import './App.css';
import BeetleSorter from './Components/BeeteSorter'
import CommunitySection from './Components/CommunitySection';
// import AllEvents from './Components/AllEvents'
// import Event from './Components/Event'

function App() {
  return (
    <div className="App">
      <header id='header'>Kafer Chasers</header>
      <body>
        <div className="paraPic">place holder for picture</div>
        <BeetleSorter/>
        <div className="paraPic">place holder for picture</div>
        <CommunitySection/>
      </body>
      <footer></footer>
        {/* <AllEvents/>
        <Event/> */}
    </div>
  );
}

export default App;
