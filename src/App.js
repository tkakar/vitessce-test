import React from 'react';
import {useState} from 'react'
import { Vitessce } from 'vitessce';
import { myViewConfig } from './my-view-config.js';

export default function App() {

  const [theme, setTheme]= useState('light')

  const handleClick = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  return (
    <>
    <div>
      <button onClick={handleClick}>Change theme</button>
    </div>
      <Vitessce
      config={myViewConfig}
      theme={theme}
    />
    </>
  
  );
}