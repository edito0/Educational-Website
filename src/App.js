import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js"
import Hero from './components/Hero.js';
import Inform from './components/Inform.js';
import Workwith from './components/Workwith.js';
import CreatePage from './components/CreatePage.js';
import Zigzag from './components/Zigzag.js';
import Resources from './components/Resources.js';
import Footer from './components/Footer.js';

export default function App() {
  
  return (
    <div>
       <Header/>
       <Hero/>
       <div>
          <Inform/>
          <Workwith/>
          <CreatePage/>
          <Zigzag/>
          <Resources/>
       </div>
       <Footer/>
    </div>
  );
}
