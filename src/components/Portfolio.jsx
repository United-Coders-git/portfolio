import React, { useState } from 'react';
import project_1 from '../assets/images/page-1.jpg';

const portfolioItems = {
  'Web': [
    { title: 'Black Lists', description: 'Web', image: project_1, link: '' },
    // Agrega más elementos de diseño web aquí
  ],
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const renderPortfolioItems = () => {
    const items = activeCategory === 'Todos'
      ? Object.values(portfolioItems).flat()
      : portfolioItems[activeCategory];

    return items.map((item, index) => (
      <div key={index} className="p-4">
        <div
          className="relative group cursor-pointer"
          onClick={() => window.location.href = item.link}
        >
          <img
            src={item.image}
            alt={item.title}
            className="rounded-lg w-full h-48 sm:h-64 lg:h-72 object-cover shadow-lg transition-transform transform group-hover:scale-105"
          />
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row mt-1">
      <div className="w-full p-4">
        <div className="bg-dark rounded-xl p-4">
          <h2 className="text-4xl font-bold text-white mb-8 mt-9 md:text-3xl lg:text-4xl">Portfolio</h2>
          <div className="flex flex-wrap space-x-2 mb-4">
            {['Todos', 'Web'].map((category) => (
              <button
                key={category}
                className={`text-sm py-2 px-4 mb-2 rounded-md transition-colors duration-300 ${
                  activeCategory === category ? 'bg-custom-yellow text-black' : 'bg-dark text-light-gray'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderPortfolioItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
