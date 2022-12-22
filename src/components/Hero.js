import React from 'react';
import './css/hero.css';
import image1 from '../61779b485e784ee5e1620a21_Image.png.png'

function Hero() {
  return (
    <> 
      <div className='hero'>
         <div className='band-1'></div>
         <div className='band-2'>
            <div className='band-2_data'>
                <h1>Built for enterprise businesses.</h1>
                <p>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</p>
                <div> <button className='btn'>Learn More {">"}</button> Explores Pages</div>
            </div>
            <div className='band-2_image'>
                <img src={image1} alt="" />
            </div>
         </div>
         <div className='band-3'>
            <div className='band-4'>SCROLL FOR MORE</div>
            <div className='band-5'></div>
         </div>
         <div className='band-6'></div>
         <div className='band-7'></div>
         <div className='band-8'></div>
         <div className='band-9'></div>
      </div>
    </>
  );
}

export default Hero;
