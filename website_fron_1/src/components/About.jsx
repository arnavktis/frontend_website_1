import React from 'react';

function About() {
  return (
    <div>
      <div>
        <main id="main">
        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('website_fron_1/src/assets/img/breadcrumbs-bg.jpg')" }}>
          </div>
          <section id="about" className="about">

              <div>
                <div>
                  <h2>J.N. Engineers</h2>
                  <div>
                    <div className="our-story">
                      <h4>Est 2015</h4>
                      <h3>Our Story</h3>
                      <p className='ab_para'>We are Faridabad based eminent manufacturer Machining Parts, assemblies,
                        axles, shafts, gears, special raw material supplier of a wide range of special type and
                        all kinds of Mechanical Engineering ferrous and non-ferrous Components &
                        Assemblies and Fabrication. J.N.ENGINEERS is an expert in designing and
                        manufacturing an exclusive range of same parts as per customers’ technical
                        specifications and needs. Founded by a team of futurists and dynamic technocrats,
                        J.N.ENGINEERS has established itself as a leading company engaged in the field
                        of Mechanical Engineering, designing, and manufacturing of various range of
                        special components as per customer’s requirement.
                      </p><br/>
                      <p className='ab_para'>We are supported by a team of experienced, skilled and trained engineers;
                        customers care personnel, and marketing professionals who have acquired mastery
                        in their respective fields. Use of genuine raw materials, compact and robust designs,
                        stringent quality measures has enabled us to carve a distinct place in the market.
                        Since inception, our vast experience, customer centric attitude, quality products,
                        and affordable price range have placed us at the pinnacle in this business domain.
                        Apart from it, our service engineers offers unmatched after sales services at
                        reasonable rates to all our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </section>


          <section id="stats-counter" className="stats-counter section-bg">
            <div className="container">

              <div className="row gy-4">

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-headset color-green flex-shrink-0"></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-people color-pink flex-shrink-0"></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </main> 


      </div>
    </div>
  );
}

export default About;
