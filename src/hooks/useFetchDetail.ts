import { useEffect, useState } from "react";
import { ProductType } from "../types/ProductTypes";

const API = "https://fakestoreapi.com/products";


export const useDetailFetch = (id: string) => {

    const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${API}/${id}`);
      if (!response.ok) throw new Error("Producto no encontrado");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { product, loading, error };

}