import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { menuItems } from '../../assets/assets'; // Corrected import path

const RestaurantMenuPage = () => {
  const handleAddToCart = (item) => {
    // Add to cart functionality
    console.log('Added to cart:', item);
  };

  return (
    <div className="min-h-screen">
      {/* Main Layout */}
      <div className="flex mt-6 px-6">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Sections</h2>
          <ul className="space-y-2">
            {['All', 'Popular', 'Offers', 'Rice', 'Pasta', 'Swallow', 'Soups', 'Sides', 'Snacks', 'Juices'].map((category) => (
              <li key={category} className="cursor-pointer hover:text-blue-500">{category}</li>
            ))}
          </ul>
        </aside>

        {/* Restaurant and Menu */}
        <div className="flex-1 mx-6">
          {/* Restaurant Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold">Alinot Cafe</h2>
            <div className="text-gray-500 mt-2 flex items-center space-x-4">
              <span>Open until 11:00pm</span>
              <span>&#8358;600</span>
              <span>30-40 min</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Search for dishes..."
            />
            <FiSearch className="absolute top-3 right-3 text-gray-400" size={24} />
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-blue-500 font-bold">&#8358;{item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;