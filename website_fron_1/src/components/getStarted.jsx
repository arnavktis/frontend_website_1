import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function getStarted() {
    return (
      <div className="getStarted">
        <div>

          <section id="get-started" className="get-started section-bg">
            <div className="container">
                <div className="row justify-content-between gy-4">

                    <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                        <div className="content">
                        <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                        <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
                        <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                        </div>
                    </div>

                    <div className="col-lg-5" data-aos="fade">
                        <form action="forms/quote.php" method="post" className="php-email-form">
                        <h3>Get a quote</h3>
                        <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                        <div className="row gy-3">

                            <div className="col-md-12">
                            <input type="text" name="name" className="form-control" placeholder="Name" required></input>
                            </div>

                            <div className="col-md-12 ">
                            <input type="email" className="form-control" name="email" placeholder="Email" required></input>
                            </div>

                            <div className="col-md-12">
                            <input type="text" className="form-control" name="phone" placeholder="Phone" required></input>
                            </div>

                            <div className="col-md-12">
                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                            </div>

                            <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                            <button type="submit">Get a quote</button>
                            </div>

                        </div>
                        </form>
                    </div>

                </div>

            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default getStarted;
  