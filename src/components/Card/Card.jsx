import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img1} alt="" className='mainImg' />
          <img src={item.img2} alt="" className='secondImg' />
        </div>
        <h2>{item?.tittle}</h2>
        <div className="prices">
          <h3>₹{item.oldPrice || item?.price + 20}</h3>
          <h3>₹{item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
