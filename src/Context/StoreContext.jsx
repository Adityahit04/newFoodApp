import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider=(props)=>{

  const [cartItems,setCartItems]=useState({})

    const AddToCart=(itemId)=>{
      if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
      }
      else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      
    }

    const RemoveFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
   const cartTotal=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];

      }
      
    }
    return totalAmount

   }

    const ContextValue = {
      food_list,
      cartItems,
      setCartItems,
      AddToCart,
      RemoveFromCart,
      cartTotal,
    };
    
    return (
      <StoreContext.Provider value={ContextValue}>
        {props.children}
      </StoreContext.Provider>
    );
}
export default StoreContextProvider;