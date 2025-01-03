import { Link } from "react-router-dom";
import { ProductType } from "../types/ProductTypes";
import { useMyContext } from "../context/MyContext";

interface ProductProps {
  prods: ProductType[];
}

const ProductCard = ({ prods }: ProductProps) => {

    const { addToCart} = useMyContext();

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {prods.map((prod) => (
        <div
          key={prod.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
        >
          <img
            src={prod.image}
            alt={prod.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {prod.title}
            </h3>
            <p className="text-gray-600 mt-2 line-clamp-2">
              {prod.description}
            </p>
            <p className="mt-4 text-xl font-bold text-blue-600">
              ${prod.price.toFixed(2)}
            </p>
            <div className="flex justify-between items-center mt-4">
              <Link to={`/product/${prod.id}`}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                  Ver Producto
                </button>
              </Link>
              <button 
              onClick={() => addToCart(prod)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
