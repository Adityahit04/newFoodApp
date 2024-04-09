import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../assets/assets';
import { StoreContext } from '../Context/StoreContext';

function FoodItem({id,name,price,image,description}) {

  const {cartItems,AddToCart,RemoveFromCart}= useContext(StoreContext)
  return (
    <>
      <div className="foodItem">
        <div className="FoodItemImgContainer">
          <img className="FoodItemImg" src={image} alt="img" />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => AddToCart(id)}
              src={assets.add_icon_white}
            />
          ) : (
            <div className="foodItemCounter">
              <img
                onClick={() => RemoveFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => AddToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="foodItemInfo">
          <div className="foodItemNamerat">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="foodItemDesc">{description}</p>
          <p className="foodItemPrice">${price}</p>
        </div>
      </div>
    </>
  );
}

export default FoodItem