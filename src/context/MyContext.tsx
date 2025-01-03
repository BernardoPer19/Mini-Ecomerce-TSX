import React, { createContext, useContext, ReactNode } from "react";
import { useFilters } from "../hooks/useFilters";  
import { ProductType } from "../types/ProductTypes";  
import { FilterType } from "../types/FIlterTypes";  
import { CartTypes } from "../types/CartTypes";  
import { useCart } from "../hooks/useCart";

interface MyContextValue {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  filterProds: ProductType[];
  addToCart: (prod: ProductType) => void;
  removeToCart: (prod: ProductType) => void;
  cart: CartTypes[];
  toggleCart: () => void;
  cartVisible: boolean;
}

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const { filter, setFilter, filterProds } = useFilters();
  const {addToCart, removeToCart, cart, toggleCart, cartVisible} = useCart();
  return (
    <MyContext.Provider value={{ filter, setFilter, filterProds, addToCart, removeToCart, cart, toggleCart, cartVisible }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext debe ser usado dentro de MyContextProvider");
  }
  return context;
};

export default MyContext;
