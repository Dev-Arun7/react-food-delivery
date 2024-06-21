import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  useEffect(() => {
    console.log("use_effect is called");
  }, [loginBtn ]);
  return (
    <div className="header">
      <div className="nav-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/about"> About </Link> </li>
          <li> <Link to="/contact"> Contact</Link> </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn == "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {" "}
            {loginBtn}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

 