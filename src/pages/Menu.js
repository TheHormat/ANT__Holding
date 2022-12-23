import React, { useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
import ProjectBack from "../images/project-back.jpg";
import Aos from "aos";

const Menu = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="menu">
      <div
        data-aos="fade-up"
        style={{ backgroundImage: `url(${ProjectBack})` }}
        className="menuTitle"
      >
        <h1 data-aos="fade-right">PROYEKTLƏR</h1>
      </div>

      <div data-aos="zoom-in-up" className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              silme={menuItem.silme}
              id={menuItem.id}
              button={menuItem.button}
              liked={menuItem.liked}
            />
          );
        })}
      </div>

      <Link to="/iconcard">
        <button>
          Favorilərim <i class="fas fa-shopping-cart"></i>
        </button>
      </Link>
    </div>
  );
};

export default Menu;
