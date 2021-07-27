import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AllComp } from './Components/AllComp';

function App() {
  return (
    <BrowserRouter>
      <AllComp/>
    </BrowserRouter>
  );
}

export default App;
