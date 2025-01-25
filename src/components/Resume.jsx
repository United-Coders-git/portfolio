import React from 'react';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import profile_leandro from '../assets/images/profile_leandro.jpeg';
import profile_samuel from '../assets/images/profile_samuel.jpeg';
import cv_leandro from '../assets/cvs/Leandro-Jacome.pdf';
import cv_samuel from '../assets/cvs/Samuel-Marquez.pdf';

const Resume = () => {
  const developers = [
    {
      profileImage: profile_samuel,
      name: 'Samuel Marquez',
      cv: cv_samuel,
      data: [
        {
          icon: <BriefcaseIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Experiencia',
          items: [
            {
              role: 'Back-End / Analista de Pruebas de Software (Grupo Consiti)',
              duration: 'Dic 2023 - Dic 2024',
              description: 'Desarrollo de APIs de autenticación y microservicios con Spring Boot, integrando inteligencia artificial para automatización de procesos, validación de datos y pruebas de sistemas dinámicos escalables.',
            },
            {
              role: 'Pasante Preventa',
              duration: 'Abr 2023 - Dic 2023',
              description: 'Apoyo en el proceso de automatización con el sistema Red Hat e implementación de un servicio de virtualización.',
            },
          ],
        },
        {
          icon: <AcademicCapIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Educación',
          items: [
            {
              role: 'Técnico en Programación de Software, Servicio Nacional de Aprendizaje',
              duration: '2020 - 2021',
              description: 'Durante mi formación como técnico en programación de software, aprendí bases de lógica de programación, lenguaje Java y el uso de diferentes entornos de desarrollo, conocimientos que ahora aplico en pruebas de software.',
            },
            {
              role: 'Tecnología en Informática, Corporación Universitaria Minuto de Dios',
              duration: '2019 - 2024',
              description: 'En el proceso de mi tecnología, he podido aprender acerca de estructura de datos básica con lenguaje C, programación orientada a objetos, manejo de bases de datos SQL como Oracle DB, MySQL y PostgreSQL, además de arquitectura de software enfocada en el manejo de sistemas operativos y procesos de virtualización.',
            },
          ],
        },
      ],
    },
    {
      profileImage: profile_leandro,
      name: 'Leandro Jácome',
      cv: cv_leandro,
      data: [
        {
          icon: <BriefcaseIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Experiencia',
          items: [
            {
              role: 'Desarrollador Frontend (Grupo Consiti)',
              duration: 'Dic 2023 — Sep 2024',
              description: 'Desarrollo de interfaces web utilizando React JS, creando soluciones robustas y eficientes integrada con API REST para consumo y presentación de datos de clientes en tiempo real.',
            },
            {
              role: 'Desarrollador Web (Grupo Consiti)',
              duration: 'Sep 2023 — Dic 2024',
              description: 'Desarrollo del sistema Listas Negras con Spring Boot y MongoDB para gestión de clientes y detección de registros en listas prohibidas, integrando servicios de IA (ChatGPT) para procesamiento de PDFs',
            },
          ],
        },
        {
          icon: <AcademicCapIcon className="h-8 w-8 text-custom-yellow mr-2" />,
          title: 'Educación',
          items: [
            {
              role: 'Ingenieria de Sistemas, Universidad Francisco de Paula Santander Ocaña',
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
            className="bg-custom-dark-2 rounded-3xl shadow-md p-6 mb-10 flex flex-col items-center text-center w-full"
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

            {/* Botón de descarga */}
            <a
              href={developer.cv}
              download={`${developer.name}-CV.pdf`}
              className="bg-custom-yellow text-custom-dark px-6 py-2 rounded-full 
                       hover:bg-opacity-80 transition-colors duration-300 mt-4
                       font-semibold text-sm md:text-base w-fit mx-auto"
            >
              Descargar CV
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;