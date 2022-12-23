import React from "react";
import Tilt from "react-parallax-tilt";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function MenuItem({ image, name, price, silme, button, id, liked }) {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(liked);
  return (
    <Tilt className="res">
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h3> {id} </h3>
        <h1> {name} </h1>
        <p> ${price} </p>
        <p
          id="btn-click"
          onClick={(e) => {
            return dispatch({
              type: "ADD_CART",
              payload: { image, name, price, silme, button, id, liked: true },
            });
          }}
        >
          {button}
        </p>
        {location.pathname === "/iconcard" ? (
          <h2
            onClick={() => {
              dispatch({ type: "REMOVE_CART", payload: id });
            }}
          >
            {" "}
            {silme}{" "}
          </h2>
        ) : (
          false
        )}
      </div>
    </Tilt>
  );
}

export default MenuItem;
