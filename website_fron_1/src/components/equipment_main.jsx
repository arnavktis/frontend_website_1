import React from 'react';
import img1 from "./img/card_item_1.jpg";
import img2 from "./img/card_item_2.jpg";
import img3 from "./img/card_item_3.jpg";
import img4 from "./img/card_item_4.jpg";
import Equipment from "./Equipments";
import { Router, Routes, Route, Link } from 'react-router-dom';

function Equipment_Main() {
  return (
    <div className="equipment">
      <section id="equipments" className="equipments">
        <div>

          <div className="section-header">
            <h2>Equipment</h2>
            <p>Elevate your capabilities with our cutting-edge equipment selection.</p>
          </div>
          <div className="container">
            <div className="card-item">
              <div className="card-bg"><img className='pic1' src={img1} alt='pic1'/></div>
              <div className="card-body">
                <h4 className="card-title">ACE Super Jobber LM-500</h4>
                <ul className='specs1'>
                  <li><strong>Maximum Turning Diameter:</strong> 300 mm.</li>
                  <li><strong>Maximum Distance Between Centers:</strong> 500 mm.</li>
                  <li><strong>Spindle RPM:</strong> 20-4200, Power – 11.5 KW, Nose taper A2-8.</li>
                  <li><strong>Hydraulic Chuck and Hydraulic Tailstock.</strong></li>
                  <li><strong>12-station Hydraulic turret.</strong></li>
                  <li><strong>CNC System:</strong> Fanuc 0iTF.</li>
                </ul>
              </div>
            </div>

            <div className="card-item">
              <div className="card-bg"><img className='pic1' src={img2} alt='pic2'/></div>
              <div className="card-body">
                <h4 className="card-title">Surface Grinder Ramanna</h4>
                <div className='middle'>
                  <ul className='specs2'>
                    <li><strong>Maximum Width:</strong> 200 mm.</li>
                    <li><strong>Maximum Length:</strong> 600 mm.</li>
                    <li><strong>Spindle RPM:</strong> 5000, Power – 2 KW.</li>
                    <li><strong>Hydraulic Operated.</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-item">
              <div className="card-bg"><img className='pic2' src={img3} alt='pic3'/></div>
              <div className="card-body">
                <h4 className="card-title">QYUIAN MNTR (TAIWAN) 1 No.</h4>
                <div class="middle">
                  <ul className='specs2'>
                    <li><strong>Maximum Width:</strong> 300 mm.</li>
                    <li><strong>Maximum Distance Between Centers:</strong> 1200 mm.</li>
                    <li><strong>Spindle RPM:</strong> 1400, Power – 2.5 KW.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card-item">
              <div className="card-bg"><img className='pic3' src={img4} alt='pic4'/></div>
              <div className="card-body">
                <h4 className="card-title">ACE Super Jobber 500-LM</h4>
                <div>
                  <ul className='specs1'>
                    <li><strong>Maximum Turning Diameter:</strong> 300 mm.</li>
                    <li><strong>Maximum Distance Between Centers:</strong> 500 mm.</li>
                    <li><strong>Spindle RPM:</strong> 20-4200, Power – 11.5 KW, Nose taper A2-8.</li>
                    <li><strong>Hydraulic Chuck and Hydraulic Tailstock.</strong></li>
                    <li><strong>12-station Hydraulic turret.</strong></li>
                    <li><strong>CNC System:</strong> Fanuc 0iTF.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <Link to="/Equipment" className='knowmore'>Know More</Link>
        </div>
      </section>
    </div>
  );
}

export default Equipment_Main;
