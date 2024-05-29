import React from 'react'
import { Formulario } from '../../formulario/Formulario'

export const InicioContacto = () => {
  return (
    <div className='flex lg:flex-row flex-col'>
      
      <div className='lg:w-1/2 flex p-10 flex-col gap-10'> 
        
        <div className=''>
          <h2 className='lg:text-[60px] text-[50px]'>Contacto</h2>
          <h2 className='lg:text-[50px] text-[40px]'> <span className='text-lightred font-bold'>SARO </span> Constructora</h2>
        </div>

        <p className='text-[25px] hidden lg:block'>
          En <span className='text-lightred font-bold'>SARO</span> Constructora, estamos aqui para ayudarte con todas tus necesidades inmboliriarias y de construccion. 
          Nuestro equipo de profesionales esta disponible para responder tus preguntas, brindarte asesoria y acompañarte en cada etapa de tu proyecto.
        </p>
      </div>

      <div className='lg:w-1/2 bg-black flex flex-col justify-center items-center p-10 h-[700px] gap-10'>
        <Formulario />
        <h3 className='text-lightred font-bold'>Horarios</h3>
        <h3 className='text-white'>
          Lunes a Viernes: 9:00 am - 17:00 pm <br />
          Sabado: 9:00 am - 13:00 pm <br />
          Doming: NO atendemos
        </h3>
      </div>

    </div>
  )
}
