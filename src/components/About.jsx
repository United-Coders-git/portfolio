import React from 'react';
import { AcademicCapIcon, AdjustmentsHorizontalIcon, CheckCircleIcon, UsersIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/24/outline';

const About = () => {
    return (
        <div className="bg-custom-dark mt-1 w-full mx-auto rounded-3xl">
            <div className='p-4 md:ml-5 md:mr-5'>
                <h1 className="text-4xl font-bold text-white mb-8 mt-12 md:text-3xl lg:text-4xl">Acerca de mí</h1>
                <p className="mb-6">
                En <b>United Coders</b>, nos especializamos en el desarrollo de soluciones de software innovadoras y de alta calidad, utilizando tecnologías de vanguardia como Java, Spring Boot, JavaScript y React, para impulsar el crecimiento de nuestros clientes mediante colaboración, excelencia técnica y compromiso con resultados que marcan la diferencia.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-jet p-4 rounded-2xl mb-3">
                        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                            <AcademicCapIcon className="h-6 w-6 text-yellow-400 mr-2" /> Experiencia comprobada
                        </h3>
                        <p>En United Coders, contamos con un equipo altamente capacitado y con experiencia en tecnologías líderes, garantizando soluciones sólidas y efectivas.</p>
                    </div>
                    <div className="bg-jet p-4 rounded-2xl mb-3">
                        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                            <LightBulbIcon className="h-6 w-6 text-yellow-400 mr-2" /> Innovación constante
                        </h3>
                        <p>Nos apasiona mantenernos a la vanguardia tecnológica, aplicando prácticas modernas y herramientas avanzadas para entregar resultados sobresalientes en cada proyecto.</p>
                    </div>
                    <div className="bg-jet p-4 rounded-2xl mb-3">
                        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                            <AdjustmentsHorizontalIcon className="h-6 w-6 text-yellow-400 mr-2" /> Soluciones personalizadas
                        </h3>
                        <p>Implementación y gestión de integraciones de APIs para asegurar una comunicación fluida entre servicios y aplicaciones.</p>
                    </div>
                    <div className="bg-jet p-4 rounded-2xl mb-3">
                        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                            <CheckCircleIcon className="h-6 w-6 text-yellow-400 mr-2" /> Pruebas y Optimización
                        </h3>
                        <p>Realización de pruebas exhaustivas y optimización de aplicaciones para mejorar el rendimiento y la usabilidad.</p>
                    </div>
                    <div className="bg-jet p-4 rounded-2xl mb-3">
                        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                            <UsersIcon className="h-6 w-6 text-yellow-400 mr-2" /> Colaboración en Equipo
                        </h3>
                        <p>Trabajo en conjunto con equipos multidisciplinarios para entregar soluciones de alta calidad que superen las expectativas del cliente.</p>
                    </div>
                    <div className="bg-jet p-4 rounded-2xl mb-3">
                        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                            <BoltIcon  className="h-6 w-6 text-yellow-400 mr-2" /> Desarrollo Ágil
                        </h3>
                        <p>Implementación de metodologías ágiles para una entrega rápida y eficiente de proyectos, asegurando la adaptación a los cambios.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
