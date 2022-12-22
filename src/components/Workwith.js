import React from 'react';
import './css/workwith.css';

import image_1 from '../img5.png'

function Workwith() {
    return (
        <div className='workwith'>
            <div><h1>Ways to work with us</h1> <button className='btn'>Get Started</button></div>

            <div>
                <div>
                    <img src={image_1} alt="img" />
                    <h3>Project Management</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                </div>
                <div>
                    <img src={image_1} alt="img" />
                    <h3>Project Management</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                </div>
                <div>
                    <img src={image_1} alt="img" />
                    <h3>Project Management</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                </div>
            </div>

        </div>
    );
}

export default Workwith;
