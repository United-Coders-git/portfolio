import React from 'react';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import profile_leandro from '../assets/images/profile_leandro.jpeg';
import profile_samuel from '../assets/images/profile_samuel.jpeg';

const Resume = () => {
  const developers = [
    {
      profileImage: profile_samuel,
      name: 'Samuel Marquez',
      data: [
        {
          icon: <BriefcaseIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Experiencia',
          items: [
            {
              role: 'Desarrollador Web (Grupo Consiti)',
              duration: 'Dic 2023 — Dic 2024',
              description: 'Desarrollo de aplicaciones web utilizando React JS y Spring Boot, creando soluciones robustas y eficientes.',
            },
          ],
        },
        {
          icon: <AcademicCapIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Educación',
          items: [
            {
              role: 'Universidad Francisco de Paula Santander Ocaña',
              duration: '(En curso)',
              description: 'Cursando los últimos semestres de mi carrera universitaria de ingeniería de sistemas, he adquirido habilidades fundamentales que pueden ser aplicadas directamente al desarrollo web.',
            },
          ],
        },
      ],
    },
    {
      profileImage: profile_leandro, 
      name: 'Leandro Jácome',
      data: [
        {
          icon: <BriefcaseIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Experiencia',
          items: [
            {
              role: 'Desarrollador Web (Grupo Consiti)',
              duration: 'Dic 2023 — Dic 2024',
              description: 'Desarrollo de aplicaciones web utilizando React JS y Spring Boot, creando soluciones robustas y eficientes.',
            },
          ],
        },
        {
          icon: <AcademicCapIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Educación',
          items: [
            {
              role: 'Universidad Francisco de Paula Santander Ocaña',
              duration: '(En curso)',
              description: 'Cursando los últimos semestres de mi carrera universitaria de ingeniería de sistemas, he adquirido habilidades fundamentales que pueden ser aplicadas directamente al desarrollo web.',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-custom-dark mt-1 w-full mx-auto rounded-3xl p-6 md:p-10 lg:p-10">
      <h1 className="text-3xl mt-6 font-bold text-white text-center mb-2">¿Quienes Somos?</h1>
      <p className="text-xl text-white text-center mb-4">
          Conoce a los expertos detrás de nuestros proyectos
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="bg-custom-dark-2 rounded-3xl shadow-md p-6 mb-10 flex flex-col items-center text-center"
          >
            <img
              src={developer.profileImage}
              alt={`Perfil de ${developer.name}`}
              className="w-28 h-28 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-bold text-custom-yellow mb-4">{developer.name}</h2>

            {developer.data.map((section, sectionIndex) => (
              <section
                key={sectionIndex}
                className="w-full flex flex-col pl-8 mb-6"
              >
                <div className="flex items-center mb-3">
                  {section.icon}
                  <h3 className="text-xl font-semibold text-custom-yellow">{section.title}</h3>
                </div>
                <div className="relative pl-2 w-full">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative text-left">
                      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-custom-yellow"></div>
                      {itemIndex !== section.items.length - 1 && (
                        <div className="absolute left-1 top-3 h-full w-0.5 bg-custom-yellow"></div>
                      )}
                      <h4 className="text-lg ml-5 font-bold text-white">{item.role}</h4>
                      <span className="text-xs ml-5 text-gray-400">{item.duration}</span>
                      <p className="text-sm text-gray-300 ml-5 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
