import React from 'react';
import './css/inform.css'
import information_img_1 from '../Screenshot (92).png';
import information_img_2 from '../Screenshot (93).png';
import information_img_3 from '../Screenshot (94).png';
import information_img_4 from '../img4.png';
import information_img_5 from '../arrow.svg';
import information_img_6 from '../leaf.svg';

function Inform() {
  return (
    <>
      <section className='inform_section-1'>
        <h1>Trusted and loved by the world’s best teams</h1>
        <div>
          <img src={information_img_1} alt="img1" />
          <img src={information_img_2} alt="img2" />
          <img src={information_img_3} alt="img3" />
        </div>
        <div className='percetange_container'>
          <div >
            <h2>5,000+</h2>
            <p>Ecommerce businesses</p>
            <p>partner with Opus</p>
          </div>
          <div>
            <h2>99.96%</h2>
            <p>Of orders ship on time</p>
            <p>within SLA</p>
          </div>
          <div>
            <h2>1</h2>
            <p>Best Fulfillment Technology</p>
            <p>by AdWeek’s Retail Awards</p>
          </div>
        </div>
      </section>

      <section className='inform_section-2'>
        <h1>Inform users with video sections</h1>
        <div>
          <img src={information_img_4} alt="img4" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>

      </section>

      <section className='inform_section-3'>

        <div>
          <h1>Make your site better with Opus</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
          </p>
          <button className='btn'>Learn More</button>
        </div>

        <div>
          <div>
            <img src={information_img_5} alt="" />
            <h2>Build or Customize a Website in Minutes
            </h2>
          </div>
          <div>
            <img src={information_img_6} alt="" />
            <h2>Our UI Kit was made for creativity.
            </h2>
          </div>
        </div>

      </section>
    </>
  );
}


export default Inform;
