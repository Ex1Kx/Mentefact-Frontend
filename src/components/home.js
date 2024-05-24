import React from 'react';

export const home = () => {
  return (
    <div>
      <nav className="main-nav" id="main-nav">
        <div className="content-wrapper-sm">
          <a href="#" className="navbar-brand">CityScapes</a>
          <div id="menu-button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#reserve">Reservations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header>
        <img className="img-absolute" src="img/city.png" alt="City 1" />
        <div className="wrapper astonish animated fadeInDown">
          <h1><strong>City</strong>Scapes</h1>
          <h2>A free, responsive, landing page. <br />
          Created by Jesus Rodriguez.</h2>
        </div>
      </header>

      <main>
        <div className="content-wrapper" id="about">
          <img className="img-absolute" src="img/city2.png" alt="City 2" />
          <div className="grid">
            <div className="grid-col-sm-12 grid-col-md-6 astonish" data-animation="fadeInLeft">
              <h2 className="section-title">About CityScapes</h2>
              <p>CityScapes is a fully responsive and customizable landing page template. All images can easily be replaced from the html side, without having to dig through the css.</p>
              <p>The full version of this template is available at Github and it comes with the SASS files in order to provide quicker customization features, for those who are developers.</p>
              <p>Javascript files are also included, they are used to enhance the user experience but apart from the menu.js file, they are all optional.</p>
            </div>
          </div>
        </div>

        <div id="reserve" className="content-wrapper-lg text-center astonish" data-animation="zoomIn">
          <h2 className="section-title">Explore New Pathways</h2>
          <p>CityScapes is great for any travel agency or tour agency, that wishes to showcase the focal points of a city. If you want a unique looking landing page that has a unique artistic style that will attract clients, then this is the template for you. Go ahead and download it for free from Github.</p>
          <a href="#" className="btn btn-outline-purple">Download</a>
        </div>

        <div className="content-wrapper" id="contact">
          <img className="img-absolute" src="img/city3.png" alt="City 3" />
          <form className="contact-form astonish" action="#" method="post" data-animation="fadeInRight">
            <h2 className="section-title">Contact Us</h2>
            <div className="grid">
              <div className="grid-col-sm-12 grid-col-md-6">
                <div className="form-group">
                  <input type="text" name="firstName" required />
                  <label htmlFor="firstName">First Name:</label>
                </div>
              </div>
              <div className="grid-col-sm-12 grid-col-md-6">
                <div className="form-group">
                  <input type="text" name="lastName" required />
                  <label htmlFor="lasttName">Last Name:</label>
                </div>
              </div>
              <div className="grid-col-sm-12">
                <div className="form-group">
                  <input type="text" name="email" required />
                  <label htmlFor="email">Email:</label>
                </div>
              </div>
              <div className="grid-col-sm-12">
                <div className="form-group">
                  <textarea name="message" required></textarea>
                  <label htmlFor="message">Message:</label>
                </div>
              </div>
            </div>
            <input className="btn btn-outline-teal" type="submit" value="Send" />
          </form>
        </div>

        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d81584.50435706123!2d-80.8378430874413!3d35.23358937843391!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1514142608486" frameBorder="0" style={{ border: '0' }} allowFullScreen></iframe>
      </main>

      <footer>
        <div className="content-wrapper-sm display-flex-between">
          <small>Your copyright 2017.</small>
          <div className="social-links">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

