import { useMyContext } from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { error, loading } = useFetch();
  const {filterProds} = useMyContext()
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Cargando...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-600">Hubo un error al cargar los productos.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">

      <Filters/>
      <ProductCard prods={filterProds}/>
    </div>
  );
};

export default ProductList;
