import React from 'react';
import './App.css';
import City from './components/City';
import Temperature from './components/Temperature';
import Description from './components/Description';
import Humidity from './components/Humidity'
import Visibility from './components/Visibility';
import Wind from './components/Wind';


function App() {

  return (
    <div className="margin-left">
      <City />
      <ul>
        <Temperature />
        <Description />
        <Humidity />
        <Visibility />
        <Wind />
      </ul>
    </div>
  );
}

export default App;
