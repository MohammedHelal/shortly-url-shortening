import { useState, useEffect } from "react";
import "../Header.css";

function Nav() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  function showDropDown() {
    let listDisplay = document.getElementById("nav-list").style.display;
    if (listDisplay === "none") {
      document.getElementById("nav-list").style.display = "block";
    } else {
      document.getElementById("nav-list").style.display = "none";
    }
  }

  return (
    <div className="navbar">
      <img src="./images/logo.svg" alt="logo" />
      {windowSize < 500 && (
        <i className="fa-solid fa-2x fa-bars" onClick={showDropDown}></i>
      )}
      <ul id="nav-list" className="nav-list">
        <li className="nav-links">Features</li>
        <li className="nav-links">Pricing</li>
        <li className="nav-links">Resources</li>
        <li className="right nav-links">Login</li>
        <li className="button">Sign Up</li>
      </ul>
    </div>
  );
}

export default Nav;
//<i class="fa-duotone fa-bars"></i>
