import { useEffect, useState } from "react";
import { ProductType } from "../types/ProductTypes";

const API = "https://fakestoreapi.com/products";
export const useFetch = () => {
  const [prods, setProds] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetched = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setProds(data);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetched();
  }, []);

  return { prods, loading, error };
};
