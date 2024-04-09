import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import './placeOrder.css'

function PlaceOrder() {
  const {cartTotal}=useContext(StoreContext)
  return (
    <form className="placeorder">
      <div className="placeorderleft">
        <p className="title">Delivery Information</p>
        <div className="multifiled">
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
        </div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="street" />
        <div className="multifield">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multifield">
          <input type="text" placeholder="zipcode" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="phone" placeholder="Phone" />
      </div>
      <div className="placeordrRight">
        <div className="cartTotal">
          <h2>Cart Total</h2>
          <div className="carttotaldetails">
            <p>Sub Total</p>
            <p>${cartTotal()}</p>
          </div>
          <hr />
          <div className="carttotaldetails">
            <p>Delivey fee</p>
            <p>${cartTotal() === 0 ? 0 : 10}</p>
          </div>
          <hr />
          <div className="carttotaldetails">
            <b>Total</b>
            <b>${cartTotal() === 0 ? 0 : cartTotal() + 10}</b>
          </div>
          <button>Procced To Payment</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder