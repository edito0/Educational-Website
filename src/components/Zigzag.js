import React from 'react';
import img6 from '../img6.png'

import './css/zigzag.css'

function Zigzag() {
    return (
        <>
            <div className='zigzag'>

                <div>
                    <p>FEATURES</p>
                    <h1>You’re not just doing business. You’re doing life.
                    </h1>
                    <ul>
                        <li>Responsive Components</li>
                        <li>Over 50 Sections</li>
                        <li>Handcrafted Pages</li>
                    </ul>
                </div>

                <div>
                    <img src={img6} alt="img" />
                </div>

            </div>

            <div className='zigzag inverse'>

                <div>
                    <p>FEATURES</p>
                    <h1>You’re not just doing business. You’re doing life.
                    </h1>
                    <ul>
                        <li>Responsive Components</li>
                        <li>Over 50 Sections</li>
                        <li>Handcrafted Pages</li>
                    </ul>
                </div>

                <div>
                    <img src={img6} alt="img" />
                </div>

            </div>

            <div className='zigzag'>

                <div>
                    <p>FEATURES</p>
                    <h1>You’re not just doing business. You’re doing life.
                    </h1>
                    <ul>
                        <li>Responsive Components</li>
                        <li>Over 50 Sections</li>
                        <li>Handcrafted Pages</li>
                    </ul>
                </div>

                <div>
                    <img src={img6} alt="img" />
                </div>

            </div>
        </>
    );
}

export default Zigzag;
