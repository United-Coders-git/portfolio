/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1e1e1f',
        'custom-dark-2': '#343434',
        'custom-yellow': '#ffdb70',
        'eerie-black-1': '#1b1b1b',
        'light-gray': '#d3d3d3', 
        'light-gray-70': '#b3b3b3', 
        'orange-yellow-crayola': '#f7c300', 
        'jet': '#343434', 
      },
      boxShadow: {
        '2': '0 4px 6px rgba(0, 0, 0, 0.1)', // Reemplaza con el valor de tu variable
      },
      fontSize: {
        'fs-3': '18px', // Ajusta el valor según el tamaño definido en --fs-3
      },
      fontWeight: {
        'fw-500': '500', // Este valor ya está en Tailwind, pero puedes definirlo explícitamente si es necesario
      },
      letterSpacing: {
        'tight': '-0.25px', // Tailwind no tiene una clase con este valor exacto, pero 'tight' es una aproximación
      },
      margin: {
        'mb-2.5': '10px', // Ajusta el valor según el margen definido en margin-bottom
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}