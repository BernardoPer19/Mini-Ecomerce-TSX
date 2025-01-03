import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./context/MyContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
 <MyContextProvider>
   <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
 </MyContextProvider>
);
