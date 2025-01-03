import React, { useState } from 'react';
import { sendEmail } from '../service/SendEmailService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);  // Estado para el loader

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setLoading(true);  // Mostrar el loader
        try {
            const response = await sendEmail(formData.name, formData.email, formData.message);

            // Limpiar los campos solo si el correo fue enviado correctamente
            if (response && response.status === 200) {
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                alert("Correo enviado exitosamente");
            } else {
                alert("Hubo un problema al enviar el correo.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al enviar el correo.");
        } finally {
            setLoading(false);  // Ocultar el loader después de completar el envío
        }
    };

    return (
        <div className="flex flex-col md:flex-row mt-1">
            <div className="w-full p-4">
                <div className="bg-custom-dark rounded-xl p-4">
                    <h2 className="text-4xl font-bold text-white mb-8 mt-9 md:text-3xl lg:text-4xl">Contacto</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-light-gray mb-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="p-3 rounded-lg bg-custom-dark-2 border border-jet text-light-gray focus:ring-2 focus:ring-custom-yellow"
                                required
                                disabled={loading}  // Deshabilitar si está cargando
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-light-gray mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="p-3 rounded-lg bg-custom-dark-2 border border-jet text-light-gray focus:ring-2 focus:ring-custom-yellow"
                                required
                                disabled={loading}  // Deshabilitar si está cargando
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-light-gray mb-2">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                className="p-3 rounded-lg bg-custom-dark-2 border border-jet text-light-gray focus:ring-2 focus:ring-custom-yellow"
                                required
                                disabled={loading}  // Deshabilitar si está cargando
                            />
                        </div>

                        {/* Mostrar loader si está cargando */}
                        {loading ? (
                            <div className="flex justify-center">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-500 border-solid"></div>
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 bg-custom-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                                disabled={loading}  // Deshabilitar el botón si está cargando
                            >
                                Enviar Mensaje
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;