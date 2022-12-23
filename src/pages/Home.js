import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ANNT from "../images/antfinancial-2.jpg";
import "../styles/Home.css";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${ANNT})` }}>
      <div className="overlay"></div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="headerContainer"
      >
        <h1>
          {" "}
          Ant <span>Holding</span>
        </h1>
        <p> Memarlıq donmuş musiqidir !</p>
        <Link to="/about">
          <button> HAQQIMIZDA </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
