import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import React from 'react';
import CommunityBoard from './CommunityBoard';

const App = () => {

  return (
    <div className="App">
      <h1>Sistas in Code👩🏽‍💻👩🏾‍💻👩🏿‍💻 </h1>
      <h3>Communities for us by us to excel in tech!</h3>
      <div className="App">
      <CommunityBoard />
    </div>
    </div>
  );
};
export default App;