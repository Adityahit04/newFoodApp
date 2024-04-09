import React from 'react'
import './Menu.css'
import {menu_list} from '../assets/assets'

function Menu({ category, setCategory }) {
  return (
    <>
      <div className="menu" id="menu">
        <h1>Expolore Menu</h1>
        <p className="Etext">
          Choose from a diverse menu feature a delectable array of dishes.Our mission is to satisfy your
          cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className="exploremenuList">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="menuListItems"
                key={index}
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt="img"
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>

        <hr />
      </div>
    </>
  );
}

export default Menu