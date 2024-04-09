import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import "./index.css";
import StoreContextProvider from "./Context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  
);
