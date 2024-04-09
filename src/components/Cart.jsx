import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import {useNavigate} from 'react-router-dom'
import './cart.css'

function Cart() {
  const {
    food_list,
    cartItems,
    setCartItems,
    AddToCart,
    RemoveFromCart,
    cartTotal,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div className="cartItems">
          <div className="cartItemTitle">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cartItemTitle cartItemItem">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p
                      className="cross"
                      onClick={() => RemoveFromCart(item._id)}
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cartbottom">
          <div className="cartTotal">
            <h2>Cart Total</h2>
            <div className="carttotaldetails">
              <p>Sub Total</p>
              <p>${cartTotal()}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <p>Delivey fee</p>
              <p>${cartTotal()===0?0:10}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <b>Total</b>
              <b>${cartTotal()===0?0:cartTotal() + 10}</b>
            </div>
            <button onClick={() => navigate("/order")}>
              Procced To Checkout
            </button>
          </div>
          <div className="cartPromo">
            <div>
              <p>If you have any promo,please go ahead</p>
              <div className="cartpromoinput">
                <input type="text" placeholder="your code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart