import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/9903003/file/original-8eae5aec60527b67b7678e42aa2d8645.jpg?resize=1024x768"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarentCard = () => {
  return (
    <div className="res-card">
      <h3> Kannur Kitchen</h3>
      <img
        className="res-logo"
        alt="img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/t3iuwfz8v2c8pzdbkwnp"
      />
      <h4> Biriyani Dosa Tea</h4>
      <p>4.4 Stars</p>
      <p>44 Minutes</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-cotainer">
        {" "}
        <RestuarentCard />{" "}
        <RestuarentCard />{" "}
        <RestuarentCard />{" "}
        <RestuarentCard />{" "}
        <RestuarentCard />{" "}
        <RestuarentCard />{" "}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
