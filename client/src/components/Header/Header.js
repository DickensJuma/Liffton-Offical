import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false
    };
    this.openMobileMenu = this.openMobileMenu.bind(this);
  }
  openMobileMenu() {
    let hamburgerIcon = document.querySelector(".hamburger.hamburger--slider");
    let mobileMenu = document.querySelector(".mobile-menu");
    this.setState(state => {
      hamburgerIcon.classList.toggle("is-active");
      mobileMenu.classList.toggle("isActive");
      return { isMobileMenuOpen: !state.isMobileMenuOpen };
    });
  }
  render() {
    // const { pathname } = this.props.location;
    return (
      
      <React.Fragment>
        <div className="offcanvas-menu-overlay"></div>
        <div className="canvas-open">
          <i className="icon_menu"></i>
        </div>
        <div className="offcanvas-menu-wrapper">
          <div className="canvas-close">
            <i className="icon_close"></i>
          </div>
          <div className="language-bar">
            <div className="language-option">
                
              <span>Our Services</span>
              <i className="fa fa-angle-down"></i>
              <div className="flag-dropdown">
                <ul>
                  <li><a href="/property">E-Rental</a></li>
                  <li><a href="/property">E-Movers</a></li>
                        
                </ul>
              </div>
            </div>
            <div className="property-btn">
              <a href="/property" class="property-sub">Submit Rentals</a>
            </div>
          </div>
          <nav className="main-menu">
            <ul>
              <li><a href="/property">Home</a></li>
              <li><a href="/property">Rentals</a></li>
              <li><a href="/property">Liffton Analysics</a></li>
              <li><a href="/property">News</a></li>
              <li><a href="/property">Listings</a></li>
              <li><a href="/property">Contact</a></li>
            </ul>
          </nav>
          <div className="nav-logo-right">
            <ul>
              <li>
                <i className="icon_phone"></i>
                <div className="info-text">
                  <span>Phone:</span>
                  <p>+254 723 567 456</p>
                </div>
              </li>
              <li>
                <i className="icon_map"></i>
                <div className="info-text">
                  <span>Address:</span>
                  <p>Oginga Streets, <span>Kisumu</span></p>
                </div>
              </li>
              <li>
                <i className="icon_mail"></i>
                <div className="info-text">
                  <span>Email:</span>
                  <p>info.lifftonHousing@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

     
        <header className="header-section">
          <div className="top-nav">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <nav className="main-menu">
                    <ul>
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="/property">E-Rentals</a></li>
                      <li><a href="/property">E-Movers</a></li>
                      <li><a href="/property">Liffton Analytics</a></li>
                      <li><a href="/property">Listings</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-lg-5">
                  <div className="top-right">
                    <div className="login-option">
              
                      <span>LOGIN</span>
                      <i className="fa fa-angle-down" />
                      <div className="flag-dropdown">
                        <ul>
                          <li><a href="/property">Landlord</a></li>
                          <li><a href="/property">Tenant</a></li>
                        </ul>
                      </div>
                    </div>
                    <a href="/property" className="property-sub">Submit Rentals</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-logo">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo">
                    <a href="/"><img src="img/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="nav-logo-right">
                    <ul>
                      <li>
                        <i className="icon_phone" />
                        <div className="info-text">
                          <span>Phone:</span>
                          <p>+254 723 567 123</p>
                        </div>
                      </li>
                      <li>
                        <i className="icon_map" />
                        <div className="info-text">
                          <span>Address:</span>
                          <p>Luthuli Streets, <span>Nairobi</span></p>
                        </div>
                      </li>
                      <li>
                        <i className="icon_mail" />
                        <div className="info-text">
                          <span>Email:</span>
                          <p>Info.liffton@gmail.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      </React.Fragment> 
    );
  }
}

