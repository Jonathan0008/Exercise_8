// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Logo from './Component/Header/Logo';

const App = () => {
  return (
    <>
      <Header title= "Header"/>
      <Home title= "Home"/>
      <Footer title = "Footer"/>
      <Logo title= "Logo"/>
    </>
  );
};

export default App
