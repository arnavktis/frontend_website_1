import React from 'react';

function About() {
  return (
    <div>
      <div>
        <main id="main">
        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('website_fron_1/src/assets/img/breadcrumbs-bg.jpg')" }}>
          </div>
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">

              <div className="row position-relative">

              <div className="col-lg-7 about-img" style={{ backgroundImage: `url('assets/img/about.jpg')` }}></div>


                <div className="col-lg-7">
                  <h2>Consequatur eius et magnam</h2>
                  <div className="our-story">
                    <h4>Est 1988</h4>
                    <h3>Our Story</h3>
                    <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                      <ul>
                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                        <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                      </ul>
                    <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                    <div className="watch-video d-flex align-items-center position-relative">
                      <i className="bi bi-play-circle"></i>
                      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox stretched-link">Watch Video</a>
                    </div>
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
