import { useParams, Link, useNavigate } from "react-router-dom";
import { useDetailFetch } from "../hooks/useFetchDetail";
import { useMyContext } from "../context/MyContext";


const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, removeToCart } = useMyContext();

  if (!id) {
    navigate("/");
    return null;
  }

  const { product, loading, error } = useDetailFetch(id);

  if (loading)
    return <p className="text-center text-lg text-gray-700">Cargando...</p>;
  if (error)
    return <p className="text-center text-red-600 text-lg">Hubo un error.</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="mt-6 mb-8">
        <Link to="/">
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition transform hover:scale-105">
            Volver atrás
          </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row gap-8">
        <div className="flex justify-center lg:w-1/3">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-80 w-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-between lg:w-2/3">
          <h2 className="text-3xl font-semibold text-gray-800">{product?.title}</h2>
          <p className="text-lg text-gray-600 mt-4">{product?.description}</p>

          <div className="mt-4">
            <span className="text-2xl font-semibold text-green-600">
              ${product?.price.toFixed(2)}
            </span>
          </div>



          <div className="mt-4">
            <span className="text-xl font-medium text-gray-800">Categoría:</span>
            <span className="text-xl font-semibold text-gray-800">{product?.category}</span>
          </div>

          <div className="mt-4 flex items-center">
            <span className="text-xl font-medium text-gray-800">Calificación:</span>
            <div className="flex ml-2">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${index < (product?.rating.rate || 0) ? 'text-yellow-500' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15l-5.5 3 2-6-5-4h6.5L10 1l2 6H18l-5 4 2 6L10 15z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-lg text-gray-600">({product?.rating.rate})</span>
          </div>

          {/* Botones de acción */}
          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            <button
              onClick={() => product && addToCart(product)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition transform hover:scale-105"
            >
              Agregar al Carrito
            </button>
            <button
              onClick={() => product && removeToCart(product)}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition transform hover:scale-105"
            >
              Eliminar del Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;