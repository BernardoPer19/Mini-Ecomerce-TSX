import { useState } from "react";
import { CartTypes } from "../types/CartTypes";
import { ProductType } from "../types/ProductTypes";



export const useCart = () => {

     const [cart, setCart] = useState<CartTypes[]>([]);
      const [cartVisible, setCartVisible] = useState<boolean>(false); 
    
      const toggleCart = () => {
        setCartVisible((prev) => !prev);
      };
    
      const addToCart = (prod: ProductType) => {
        setCart((prev) => {
          const existProd = prev.find((item) => item.id === prod.id);
          if (existProd) {
            return prev.map((item) =>
              item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prev, { ...prod, quantity: 1 }];
          }
        });
      };
    
      const removeToCart = (prod: ProductType) => {
        setCart((prev) => {
          const existProd = prev.find((item) => item.id === prod.id);
          if (existProd) {
            return prev
              .map((item) =>
                item.id === prod.id ? { ...item, quantity: item.quantity - 1 } : item
              )
              .filter((item) => item.quantity > 0);  // Eliminar el producto si la cantidad llega a 0
          } else {
            return prev;
          }
        });
      };
    
      return {addToCart, removeToCart, cart, toggleCart, cartVisible};

}