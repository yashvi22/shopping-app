import React from "react";

import "./homepage.styles.scss";

function HomePage() {
  return (
    <div className="home-page">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HAT</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
