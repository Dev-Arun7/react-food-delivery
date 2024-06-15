import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li> Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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

 