import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ProductList />} path="/" />
        <Route element={<ProductDetails />} path="/product/:id" />
      </Routes>
    </>
  );
}

export default App;
