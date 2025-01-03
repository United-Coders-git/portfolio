import React from 'react';
import avatar from '../assets/images/avatar-1.png';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const wpp = () => window.location.href = 'https://wa.me/573135878123';
    const mailto = () => window.location.href = 'mailto:unitedcoders.contact@gmail.com';

    return (
        <aside
            className={`bg-custom-dark rounded-3xl mt-4 ml-5 lg:mt-9 lg:block mb-2 flex flex-col items-center justify-center w-full max-w-[90vw] md:max-w-[250px] fixed left-0 transition-transform duration-300 ease-in-out z-20 overflow-hidden ${sidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                } md:translate-x-0 md:opacity-100`}>
            <div className='flex flex-col items-center text-center justify-center mt-6 mb-6 sm:mt-8 sm:mb-8'>
                <figure className='bg-custom-dark-2 rounded-full w-24 sm:w-32 md:w-36 flex items-center justify-center mb-4'>
                    <img src={avatar} alt="Avatar" className="rounded-full w-full h-full object-cover" />
                </figure>
                <h1 className='text-white text-lg sm:text-2xl md:text-2xl font-bold tracking-tight mb-2.5'>
                    United Coders
                </h1>
                <p className="bg-custom-dark-2 w-24 sm:w-32 h-7 rounded-lg text-white text-xs sm:text-sm flex items-center justify-center">
                    Web Developers
                </p>
                <div className="w-3/4 border-t border-zinc-700 my-4 mx-auto"></div>
                <div>
                    <div className="w-full flex items-center cursor-pointer" onClick={mailto}>
                        <div className="bg-custom-dark-2 p-3 rounded-lg shadow-lg flex-shrink-0">
                            <EnvelopeIcon className="h-6 w-6 text-custom-yellow" />
                        </div>
                        <div className="ml-2 text-left">
                            <h2 className="text-zinc-500 text-xs sm:text-sm font-semibold">EMAIL</h2>
                            <p className="text-white text-xs">unitedcoders.contact@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center mt-4 cursor-pointer" onClick={wpp}>
                        <div className="bg-custom-dark-2 p-3 rounded-lg shadow-lg flex-shrink-0">
                            <DevicePhoneMobileIcon className="h-6 w-6 text-custom-yellow" />
                        </div>
                        <div className="ml-2 text-left">
                            <h2 className="text-zinc-500 text-xs sm:text-sm font-semibold">TELEFONO</h2>
                            <p className="text-white text-xs">+57 313-587-8123</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center mt-4 cursor-pointer">
                        <div className="bg-custom-dark-2 p-3 rounded-lg shadow-lg flex-shrink-0">
                            <MapPinIcon className="h-6 w-6 text-custom-yellow" />
                        </div>
                        <div className="ml-2 text-left">
                            <h2 className="text-zinc-500 text-xs sm:text-sm font-semibold">UBICACION</h2>
                            <p className="text-white text-xs">Colombia</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 border-t border-zinc-700 my-4 mx-auto"></div>
                <div className='flex space-x-3 text-zinc-500'>
                    <a href="https://www.linkedin.com/in/united-coders/" aria-label="Linkedin">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="https://www.tiktok.com/@unitedcoders6" aria-label="Twitter">
                        <ion-icon name="logo-tiktok"></ion-icon>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;