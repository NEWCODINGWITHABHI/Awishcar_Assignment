
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import AsteroidBody from './components/asteroid-body/AsteroidBody';

function App() {


 
  return (
    <div className="App">
     <Header/>
     <AsteroidBody/>
    </div>
  );
}

export default App;
