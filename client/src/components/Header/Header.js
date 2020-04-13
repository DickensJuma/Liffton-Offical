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
      <div>
        <div classname="offcanvas-menu-overlay" />
        <div classname="canvas-open">
          <i classname="icon_menu" />
        </div>
        <div classname="offcanvas-menu-wrapper">
          <div classname="canvas-close">
            <i classname="icon_close" />
          </div>
          <div classname="language-bar">
            <div classname="language-option">
              <span>Our Services</span>
              <i classname="fa fa-angle-down" />
              <div classname="flag-dropdown">
                <ul>
                  <li>
                    <a href="/property">E-Rental</a>
                  </li>
                  <li>
                    <a href="/property">E-Movers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div classname="property-btn">
              <a href="/property" className="property-sub">
                Submit Rentals
              </a>
            </div>
          </div>
          <nav classname="main-menu">
            <ul>
              <li>
                <a href="/property">Home</a>
              </li>
              <li>
                <a href="/property">Rentals</a>
              </li>
              <li>
                <a href="/property">Liffton Analysics</a>
              </li>
              <li>
                <a href="/property">News</a>
              </li>
              <li>
                <a href="/property">Listings</a>
              </li>
              <li>
                <a href="/property">Contact</a>
              </li>
            </ul>
          </nav>
          <div classname="nav-logo-right">
            <ul>
              <li>
                <i classname="icon_phone" />
                <div classname="info-text">
                  <span>Phone:</span>
                  <p>+254 723 567 456</p>
                </div>
              </li>
              <li>
                <i classname="icon_map" />
                <div classname="info-text">
                  <span>Address:</span>
                  <p>
                    Oginga Streets, <span>Kisumu</span>
                  </p>
                </div>
              </li>
              <li>
                <i classname="icon_mail" />
                <div classname="info-text">
                  <span>Email:</span>
                  <p>info.lifftonHousing@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <header classname="header-section">
          <div classname="top-nav">
            <div classname="container">
              <div classname="row">
                <div classname="col-lg-7">
                  <nav classname="main-menu">
                    <ul>
                      <li classname="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/property">E-Rentals</a>
                      </li>
                      <li>
                        <a href="/property">E-Movers</a>
                      </li>
                      <li>
                        <a href="/property">Liffton Analytics</a>
                      </li>
                      <li>
                        <a href="/property">Listings</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div classname="col-lg-5">
                  <div classname="top-right">
                    <div classname="login-option">
                      <span>LOGIN</span>
                      <i classname="fa fa-angle-down">
                        <div classname="flag-dropdown">
                          <ul>
                            <li>
                              <a href="/property">Landlord</a>
                            </li>
                            <li>
                              <a href="/property">Tenant</a>
                            </li>
                          </ul>
                        </div>
                      </i>
                    </div>
                    <i classname="fa fa-angle-down">
                      <a href="/property" classname="property-sub">
                        Submit Rentals
                      </a>
                    </i>
                  </div>
                  <i classname="fa fa-angle-down"></i>
                </div>
                <i classname="fa fa-angle-down"></i>
              </div>
              <i classname="fa fa-angle-down"></i>
            </div>
            <i classname="fa fa-angle-down"></i>
          </div>
          <i classname="fa fa-angle-down">
            <div classname="nav-logo">
              <div classname="container">
                <div classname="row">
                  <div classname="col-lg-3">
                    <div classname="logo">
                      <a href="/">
                        <img src="img/logo.png" alt />
                      </a>
                    </div>
                  </div>
                  <div classname="col-lg-9">
                    <div classname="nav-logo-right">
                      <ul>
                        <li>
                          <i classname="icon_phone">
                            <div classname="info-text">
                              <span>Phone:</span>
                              <p>+254 723 567 123</p>
                            </div>
                          </i>
                        </li>
                        <i classname="icon_phone">
                          <li>
                            <i classname="icon_map">
                              <div classname="info-text">
                                <span>Address:</span>
                                <p>
                                  Luthuli Streets, <span>Nairobi</span>
                                </p>
                              </div>
                            </i>
                          </li>
                          <i classname="icon_map">
                            <li>
                              <i classname="icon_mail">
                                <div classname="info-text">
                                  <span>Email:</span>
                                  <p>Info.liffton@gmail.com</p>
                                </div>
                              </i>
                            </li>
                            <i classname="icon_mail"></i>
                          </i>
                        </i>
                      </ul>
                      <i classname="icon_phone">
                        <i classname="icon_map">
                          <i classname="icon_mail"></i>
                        </i>
                      </i>
                    </div>
                    <i classname="icon_phone">
                      <i classname="icon_map">
                        <i classname="icon_mail"></i>
                      </i>
                    </i>
                  </div>
                  <i classname="icon_phone">
                    <i classname="icon_map">
                      <i classname="icon_mail"></i>
                    </i>
                  </i>
                </div>
                <i classname="icon_phone">
                  <i classname="icon_map">
                    <i classname="icon_mail"></i>
                  </i>
                </i>
              </div>
              <i classname="icon_phone">
                <i classname="icon_map">
                  <i classname="icon_mail"></i>
                </i>
              </i>
            </div>
            <i classname="icon_phone">
              <i classname="icon_map">
                <i classname="icon_mail"></i>
              </i>
            </i>
          </i>
        </header>
        <i classname="fa fa-angle-down">
          <i classname="icon_phone">
            <i classname="icon_map">
              <i classname="icon_mail"></i>
            </i>
          </i>
        </i>
      </div>
    );
  }
}
