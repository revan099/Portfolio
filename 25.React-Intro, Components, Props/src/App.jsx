import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              alt="Logo"
              height="30"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  Header */}
      <section className="hero">
        <div className="container-fluid">
          <h2>Welcome To Our Studio!</h2>
          <h1>It's Nice To Meet You</h1>
          <button className="btn btn-warning">TELL ME MORE</button>
        </div>
      </section>
      {/* Services */}
      <section className="services_center">
        <div className="container">
          <h2>SERVICES</h2>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <i class="bi bi-cart"></i>
                <div className="card-body">
                  <h5 className="card-title">E-Commerce</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <i class="bi bi-pc-display-horizontal"></i>
                <div className="card-body">
                  <h5 className="card-title">Responsive Design</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <i class="bi bi-basket3-fill"></i>
                <div className="card-body">
                  <h5 className="card-title">Web Security</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* portolio */}
      <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">  
                   
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption text-align-center">
                                <div class="portfolio-caption-heading">Threads</div>
                                <div class="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                       
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg"/>
                            </a>
                            <div class="portfolio-caption text-align-center">
                                <div class="portfolio-caption-heading">Explore</div>
                                <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                      
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption text-align-center">
                                <div class="portfolio-caption-heading">Finish</div>
                                <div class="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                       
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption text-align-center">
                                <div class="portfolio-caption-heading">Lines</div>
                                <div class="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                      
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption text-align-center">
                                <div class="portfolio-caption-heading">Southwest</div>
                                <div class="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
              
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption text-align-center">
                                <div class="portfolio-caption-heading">Window</div>
                                <div class="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </>
  );
}

export default App;
