import React from "react";

const Footer = () => (
  <footer className="footer-section set-bg">
    <div className="container">
      
      <div className="footer-text">
        
        <div className="row">
       
          <div className="col-lg-3">
            <div className="footer-logo">
              <div className="logo">
                <a href="/property">
                  <img
                    src={require("../../../assets/images/logo.png")}
                    alt=""
                  />
                </a>
              </div>
              <p>
                Subscribe our newsletter gor get notification about new updates.
              </p>
              <form action="/property" className="newslatter-form">
                <input type="text" placeholder="Enter your email..." />
                <button type="submit">
                  <i className="fa fa-location-arrow" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="footer-widget">
              <h4>Rentals City</h4>
              <ul>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Nairobi</a>
                </li>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Mombasa</a>
                </li>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Kisumu</a>
                </li>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Thika</a>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Nakuru</a>
                </li>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Narok</a>
                </li>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Muranga</a>
                </li>
                <li>
                  <i className="fa fa-caret-right" /> <a href="/property">Eldoret</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-widget">
              <h4>Social</h4>
              <ul className="social">
                <li>
                  <i className="ti-facebook" /> <a href="/property">Facebook</a>
                </li>
                <li>
                  <i className="ti-instagram" /> <a href="/property">Instagram</a>
                </li>
                <li>
                  <i className="ti-twitter-alt" /> <a href="/property">Twitter</a>
                </li>
                <li>
                  <i className="ti-google" /> <a href="/property">Google+</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h4>Contact Us</h4>
              <ul className="contact-option">
                <li>
                  <i className="fa fa-map-marker" /> Oginga Streets. Nairobi,
                  Kenya
                </li>
                <li>
                  <i className="fa fa-phone" /> +254 734 785 091
                </li>
                <li>
                  <i className="fa fa-envelope" /> info.lifftonhousing@gmail.com
                </li>
                <li>
                  <i className="fa fa-clock-o" /> Mon - Sat, 08 AM - 06 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        <p />
        <p>Copyright © Liffton Housing</p>
        <p />
      </div>
    </div>
  </footer>
);
export default Footer;
