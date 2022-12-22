import React from 'react';
import './css/resource.css'
import image_1 from '../img7.png'

function Resources() {
    return (
        <>
            <div className='resources'>
                <div><h1>Resources</h1> <button className='btn'>Get Started</button></div>

                <div>
                    <div>
                        <img src={image_1} alt="img" />
                        <h3>Project Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                        <a href="">Read Article</a>
                    </div>
                    <div>
                        <img src={image_1} alt="img" />
                        <h3>Project Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                        <a href="">Read Article</a>
                    </div>
                    <div>
                        <img src={image_1} alt="img" />
                        <h3>Project Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                        <a href="">Read Article</a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Resources;
