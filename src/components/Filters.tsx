import React from "react";
import { useMyContext } from "../context/MyContext";

const Filters = () => {
  const { filter, setFilter } = useMyContext();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter((prev) => ({
      ...prev,
      category: event.target.value,
    }));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({
      ...prev,
      price: event.target.value,
    }));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 mx-auto max-w-4xl mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Filtros</h2>

      <div className="flex justify-between gap-6">
        {/* Filtro por Categoría */}
        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            <span className="text-lg font-semibold">Categoría</span>
          </label>
          <select
            id="category"
            name="category"
            value={filter.category}
            onChange={handleCategoryChange}
            className="mt-1 block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm transition duration-300 ease-in-out"
          >
            <option value="all">Todas</option>
            <option value="electronics">Electrónicos</option>
            <option value="men's clothing">Ropa de hombre</option>
            <option value="women's clothing">Ropa de mujer</option>
            <option value="jewelery">Joyería</option>
          </select>
        </div>

        {/* Filtro por Precio */}
        <div className="flex-1">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            <span className="text-lg font-semibold">Precio</span>
          </label>
          <select
            id="price"
            name="price"
            value={filter.price}
            onChange={handlePriceChange}
            className="mt-1 block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm transition duration-300 ease-in-out"
          >
            <option value="all">Todos</option>
            <option value="medium">$50 - $100</option>
            <option value="high">$100 - $500</option>
            <option value="very-high">Más de $500</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
