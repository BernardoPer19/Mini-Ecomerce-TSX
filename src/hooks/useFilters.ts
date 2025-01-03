import { useState } from "react";
import { FilterType } from "../types/FIlterTypes";
import { useFetch } from "../hooks/useFetch";

export const useFilters = () => {
    const [filter, setFilter] = useState<FilterType>({
        category: "all",
        price: "all",
      });
      const {prods} = useFetch();

  const filterProds = prods.filter((prod) => {
    const filterCategory = prod.category === filter.category || filter.category === "all";
    const filterPrice = filter.price === "all" || (filter.price === "low" && prod.price < 100) || (filter.price === "high" && prod.price >= 100);
    return filterCategory && filterPrice
  })


    return { filter, setFilter, filterProds };
}