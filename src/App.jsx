import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'acerca de':
        return <About />;
      case 'conócenos':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contacto':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex h-screen text-light-gray" >
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Button to toggle sidebar */}
      <button
        className="block md:hidden text-light-gray-70 hover:text-light-gray-50 focus:text-light-gray-50 p-4 fixed top-4 left-4 z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Main Content */}
      <div className={`overflow-y-hidden flex-1 flex flex-col transition-opacity duration-300 ${sidebarOpen ? 'opacity-50' : ''}`}>
        <nav className="fixed xl:-right-6 lg:mr-14 mt-9 bottom-0 left-0 right-0 md:top-0 md:right-12 md:left-auto md:bottom-auto bg-custom-dark-2 backdrop-blur-md border border-jet rounded-t-3xl md:rounded-t-none md:rounded-tr-3xl md:rounded-bl-3xl md:rounded-br-none shadow-2 z-40 flex justify-center md:justify-start">
          <ul className="flex space-x-2 md:space-x-4 p-2">
            {['Acerca de', 'Conócenos', 'Portfolio', 'Contacto'].map((item, index) => (
              <li key={index}>
                <button
                  key={activeSection === item.toLowerCase() ? `${item}-active` : `${item}-inactive`}
                  className={`text-xs sm:text-sm md:text-base py-2 px-4 transition-colors duration-300 hover:text-light-gray-70 focus:text-light-gray-70 ${activeSection === item.toLowerCase() ? 'text-custom-yellow' : 'text-light-gray'}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());  // Actualiza la sección activa
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="scrollbar-hide flex-1 p-4 md:p-8 overflow-y-auto ml-0 md:ml-64">
          <div className="bg-custom-dark rounded-3xl mb-10">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;