import React, { useState } from "react";
import Logo from "../images/nav-logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <div
          className={openLinks ? " availableLinks hiddenLinks" : "hiddenLinks"}
        >
          <Link to="/"> Ana Səhifə </Link>
          <Link to="/menu"> Proyektlər </Link>
          <Link to="/about"> Haqqımızda </Link>
          <Link to="/partners"> Qurucular </Link>
          <Link to="/contact"> Əlaqə </Link>
          <Link to="/iconcard">
            {" "}
            <i class="fas fa-shopping-cart"></i>{" "}
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Ana Səhifə </Link>
        <Link to="/menu"> Proyektlər </Link>
        <Link to="/about"> Haqqımızda </Link>
        <Link to="/partners"> Qurucular </Link>
        <Link to="/contact"> Əlaqə </Link>
        <Link to="/iconcard">
          {" "}
          <i class="fas fa-shopping-cart"></i>{" "}
        </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
