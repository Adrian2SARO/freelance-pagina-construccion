import  { useState } from 'react';
import emailjs from 'emailjs-com';


export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [mensajeExito, setMensajeExito] = useState(null);
  const [mensajeError, setMensajeError] = useState(null);

  const enviarFormulario = async (e) => {
    e.preventDefault();

    // Validacion antes de enviar
    if (formulario.nombre === '') {
      setErrores((prevErrores) => ({
        ...prevErrores,
        nombre: 'Por favor, ingrese su nombre.',
      }));
      return;
    }

    if (formulario.correo === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) {
      setErrores((prevErrores) => ({
        ...prevErrores,
        correo: 'Por favor, ingrese un correo electrónico válido.',
      }));
      return;
    }

    if (formulario.telefono === '' || !/^\d+$/.test(formulario.telefono)) {
      setErrores((prevErrores) => ({
        ...prevErrores,
        telefono: 'Por favor, ingrese un número de teléfono válido.',
      }));
      return;
    }

    if (formulario.mensaje === '') {
      setErrores((prevErrores) => ({
        ...prevErrores,
        mensaje: 'Por favor, ingrese un mensaje.',
      }));
      return;
    }

    try {
      // Configura el objeto de datos para enviar al servicio de EmailJS
      const data = {
        to_name: 'SARO Constructora',  // Reemplaza 'Destinatario' con el nombre del destinatario real
        from_name: formulario.nombre,
        from_email: formulario.correo,
        phone_number: formulario.telefono,
        message: formulario.mensaje,
      };

      // Envía el formulario usando EmailJS
      await emailjs.send('service_l7l5wnf', 'template_91irgpm', data, 'y5J5u1H5QKp5F6fJX');

      // Muestra mensaje de éxito
      setMensajeExito('¡Mensaje enviado con éxito!');
      setMensajeError(null);

      // Restablece el formulario y los errores después de un envío exitoso
      setFormulario({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
      });

      setErrores({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      // Muestra mensaje de error
      setMensajeError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      setMensajeExito(null);

      console.error('Error al enviar el formulario:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });

    // Limpia el error correspondiente al cambiar el valor
    setErrores((prevErrores) => ({
      ...prevErrores,
      [name]: '',
    }));
  };

  return (
        <form onSubmit={enviarFormulario} className='flex justify-center flex-col'>
          <div className='mb-4 '>
            <input type='text' placeholder='Nombre' name='nombre' value={formulario.nombre} onChange={handleChange} className="w-full p-2 text-lg border-b-2 border-gray-300 outline-none focus:border-green-500" />
            {errores.nombre && <span className='text-red-500 text-sm mt-1'>{errores.nombre}</span>}
          </div>

          <div className='mb-4'>
            <input type='email' placeholder='Correo electrónico' name='correo' value={formulario.correo} onChange={handleChange} className="w-full p-2 text-lg border-b-2 border-gray-300 outline-none focus:border-green-500" />
            {errores.correo && <span className='text-red-500 text-sm mt-1'>{errores.correo}</span>}
          </div>

          <div className='mb-4'>
            <input type='tel' placeholder='Número telefónico' name='telefono' value={formulario.telefono} onChange={handleChange} className="w-full p-2 text-lg border-b-2 border-gray-300 outline-none focus:border-green-500" />
            {errores.telefono && <span className='text-red-500 text-sm mt-1'>{errores.telefono}</span>}
          </div>

          <div className='mb-4'>
            <textarea placeholder='Mensaje...' name='mensaje' value={formulario.mensaje} onChange={handleChange} className="w-full max-h-[100px] min-h-[100px] p-2 text-lg border-b-2 border-gray-300 outline-none focus:border-green-500"></textarea>
            {errores.mensaje && <span className='text-red-500 text-sm mt-1'>{errores.mensaje}</span>}
          </div>

          {mensajeExito && <div className='text-green-500 text-sm mt-1'>{mensajeExito}</div>}
          {mensajeError && <div className='text-red-500 text-sm mt-1'>{mensajeError}</div>}

          <button type="submit" className='button'>
            Enviar mensaje
            <span className=""></span>
          </button>
        </form>
  );
};