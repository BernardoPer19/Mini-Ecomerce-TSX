import { useMyContext } from "../context/MyContext";

const Navbar = () => {
  const { cart, toggleCart, cartVisible, removeToCart } = useMyContext();

  return (
    <nav className="bg-indigo-800 p-6 flex justify-between items-center text-white shadow-md">
      <div className="text-4xl font-semibold text-white hover:text-yellow-300 transition duration-300">
        Mini E-Commerce
      </div>

      <div className="relative">
        <button
          onClick={toggleCart}
          className="bg-green-600 text-xl px-6 py-3 rounded-lg hover:bg-green-500 focus:outline-none transition duration-300 transform hover:scale-105"
        >
          🛒 Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </button>

        {cartVisible && (
          <div className="absolute right-0 mt-4 bg-white border shadow-lg rounded-lg p-6 max-[800px]:w-[100%] sm:w-[400%]  lg:w-[600%] max-h-[70vh] overflow-y-auto z-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Carrito de compras</h3>

            {cart.length === 0 ? (
              <p className="text-lg text-gray-600">No hay productos en el carrito.</p>
            ) : (
              <div className="space-y-1 sm:space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-center items-center w-1/6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md shadow-md"
                      />
                    </div>

                    <div className="flex flex-col items-start space-y-1 w-1/3">
                      <span className="text-lg font-medium text-gray-800">Nombre:</span>
                      <span className="text-xl font-semibold text-gray-800">{item.title}</span>
                    </div>

                    {/* Aquí escondemos la descripción solo en móviles */}
                    <div className="hidden sm:flex flex-col items-start space-y-2 w-1/3">
                      <span className="text-lg font-medium text-gray-800">Descripción:</span>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>

                    <div className="flex flex-col items-start space-y-1 w-1/6">
                      <span className="text-lg font-medium text-gray-800">Cantidad:</span>
                      <span className="text-xl font-semibold text-blue-600">{item.quantity}</span>
                    </div>

                    <div className="flex flex-col items-start space-y-1 w-1/6">
                      <span className="text-lg font-medium text-gray-800">Eliminar:</span>
                      <button
                        onClick={() => removeToCart(item)}
                        className="text-red-500 hover:text-red-400 text-xl transition duration-200"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-green-700">
                  Total: $
                  {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </span>
                <button className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
                  Finalizar compra
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
