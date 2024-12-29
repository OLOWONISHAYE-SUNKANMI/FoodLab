import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-6 mt-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-semibold text-center text-blue-500 md:text-left">Categories</h1>
      
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-24 h-24 rounded-full border-2 p-1 transition-all ${
                category === item.menu_name ? "border-blue-500" : "border-transparent"
              }`}
            />
            <p className="mt-3 text-lg text-blue-600 sm:text-xl">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr className="mt-6 border-t border-gray-300" />
    </div>
  );
};

export default ExploreMenu;
