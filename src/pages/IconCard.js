import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem";
import "../styles/IconCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IconBack from "../images/favori-back.jpg";

function IconCard() {
  const selector = useSelector((state) => state);

  console.log(selector);

  return (
    <div className="card-container">
      <div
        style={{ backgroundImage: `url(${IconBack})` }}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="card-txt"
      >
        <h1 data-aos="fade-left">FAVORİ PROYEKTLƏR</h1>
        <Link to="/">
          <button>ANA SƏHİFƏ</button>
        </Link>
      </div>
      <div data-aos="fade-up-right" className="card-menu">
        {selector.favoriReducer.map((index, key) => (
          <MenuItem
            key={key}
            image={index.image}
            name={index.name}
            price={index.price}
            silme={index.silme}
            id={index.id}
            liked={index.liked}
          />
        ))}
      </div>
    </div>
  );
}

export default IconCard;
