import React from "react";
import "./ItemCard.css";
const ItemCard = (props) => {
  return (
    <div className="item_card">
      {props.alignment ? (
        <div className="inner">
          <div className="card">
            <div className="background_div"></div>
            <img src={props.imgurl} alt="sofa" className="shelf_items" />
            <p className={`item_title text ${props.class}`}>{props.title}</p>
          </div>
          <p className="vertical_text">{props.sideText}</p>
        </div>
      ) : (
        <div className="inner">
          <p className="vertical_text">{props.sideText}</p>
          <div className="card">
            <div className="background_div"></div>
            <img src={props.imgurl} alt="sofa" className="shelf_items" />
            <p className={`item_title text ${props.class}`}>{props.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
