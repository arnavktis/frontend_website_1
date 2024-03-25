import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./img/card_item_1.jpg";
import img2 from "./img/card_item_2.jpg";

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
                <ul className='specs'>
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
                  <ul className='specs'>
                    <li><strong>Maximum Width:</strong> 200 mm.</li>
                    <li><strong>Maximum Length:</strong> 600 mm.</li>
                    <li><strong>Spindle RPM:</strong> 5000, Power – 2 KW.</li>
                    <li><strong>Hydraulic Operated.</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-item">
              <div className="card-bg" style={{backgroundImage: "url(assets/img/constructions-3.jpg)"}}></div>
              <div className="card-body">
                <h4 className="card-title">Error beatae dolor inventore aut</h4>
                <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
              </div>
            </div>
            
            <div className="card-item">
              <div className="card-bg" style={{backgroundImage: "url(assets/img/constructions-3.jpg)"}}></div>
              <div className="card-body">
                <h4 className="card-title">Error beatae dolor inventore aut</h4>
                <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Equipment_Main;
