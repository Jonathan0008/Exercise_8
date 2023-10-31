// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Logo from './component/Header/Logo';
import Generations from './component/Header/Generations';

const App = () => {
  return (
    <>
      <Header title= "Header"/>
      <Home title= "Home"/>
      <Footer title = "Footer"/>
      <Logo title= "Logo"/>
      <Generations title = "Generations"/>
    </>
  );
};

export default App
