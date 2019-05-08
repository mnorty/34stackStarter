import React from 'react';
import './materialize.css'
import './App.css';
import AllEvents from './Components/AllEvents'
import Event from './Components/Event'

function App() {
  return (
    <div className="App">
        <AllEvents/>
        <Event/>
    </div>
  );
}

export default App;
