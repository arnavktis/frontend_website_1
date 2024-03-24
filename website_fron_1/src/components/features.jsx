import React from "react";
import { useState } from 'react';

function Feature() {

    const [tabNum, setTabNum] = useState(1);
    const getTabNum = (option) => {
        setTabNum(option);
    };

    return (
      <div className="feature">
        <div>
            <section id="features" className="features section-bg">
                <div className="container" data-aos="fade-up">
                    <ul className="tab" style={{ justifyContent: 'center' }}>

                        <li onClick={() => getTabNum(1)}>
                            <a className={tabNum==1 ? "nav-link active show": "nav-link"}>
                            <h4>Our Team</h4>
                            </a>
                        </li>

                        <li onClick={() => getTabNum(2)}>
                            <a className={tabNum==2 ? "nav-link active show": "nav-link"}>
                            <h4>Our Commitment</h4>
                            </a>
                        </li>

                        <li onClick={() => getTabNum(3)}>
                            <a className={tabNum==3 ? "nav-link active show": "nav-link"}>
                            <h4>Infrastructure</h4>
                            </a>
                        </li>

                    </ul>

                    <div className="tab-content" style={{ textAlign: 'center' }}>

                        <div className={tabNum==1 ? "tab-pane active show": "tab-pane"}>
                            <div className="para" style={{ fontStyle: 'italic' }}>
                                <p>Founded by a team of forward-thinking technocrats, J.N.ENGINEERS boasts a team of experienced,</p>
                                <p>skilled, and trained engineers, customer care personnel, and marketing professionals. With mastery</p>
                                <p>in their respective fields, our team ensures the use of genuine raw materials, compact designs, and </p>
                                <p>stringent quality measures, carving a distinct place in the market.</p>
                            </div>
                        </div>

                        <div className={tabNum==2 ? "tab-pane active show": "tab-pane"}>
                            <div className="para" style={{ fontStyle: 'italic' }}>
                                <p>Since inception, our customer-centric approach, coupled with quality products and competitive pricing, </p>
                                <p>has positioned us as leaders in the mechanical engineering domain. Our dedication extends beyond product </p>
                                <p>delivery, with unmatched after-sales service provided by our service engineers at reasonable rates to </p>
                                <p>ensure client satisfaction.</p>
                            </div>
                        </div>

                        <div className={tabNum==3 ? "tab-pane active show": "tab-pane"}>
                            <div className="para" style={{ fontStyle: 'italic' }}>
                                <p>Equipped with state-of-the-art facilities, our infrastructure comprises a fully-fledged design and </p>
                                <p>manufacturing unit, quality control division, and packaging and delivery section. Utilizing modern </p>
                                <p>designing software and manufacturing tools, our team delivers contemporary components while ensuring </p>
                                <p>stringent quality checks and meticulous packaging for client satisfaction.</p> 
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
      </div>
    );
  }
  
  export default Feature;