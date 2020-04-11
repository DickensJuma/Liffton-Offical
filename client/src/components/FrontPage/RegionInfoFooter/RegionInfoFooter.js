import React, { Component } from "react";

export default class RegionInfoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="howit-works spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Find Your Dream House</span>
                <h2>How It Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-howit-works">
                <img src="img/howit-works/howit-works-1.png" alt="" />
                <h4>Search &amp; Find Rentals</h4>
                <p>
                  Use E-Keja searching tools to find the perfect rental that
                  matches your lifestyle.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-howit-works">
                <img src="img/howit-works/howit-works-3.png" alt="" />
                <h4>Talk To Landlords</h4>
                <p>
                  E-Keja listings have descriptions, photographs and rental
                  details from our trusted Landlords
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-howit-works">
                <img
                  src="img/howit-works/moving-truck.png"
                  className="truck"
                  alt=""
                />
                <h4>Connect to Instant E-Movers </h4>
                <p>
                  Moving is an emotion we understand well. Trust us to move you
                  in Kenya and East Africa. We promise a No Mess No Stress
                  experience, that will make us recommend to your friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
