import video from './assets/about-vid.mp4';
import CustomButton from '../../botones/CustomButton';
import { NavLink } from 'react-router-dom';

export const InicioAcerca = () => {
  return (
    <>

      <div className='flex flex-col lg:flex-row'>

      <h1 className='lg:text-[80px] text-[50px] lg:h-[80px] mt-[-15px] lg:hidden '>Acerca de </h1>
      <h1 className='lg:text-[60px] text-[40px] lg:hidden mb-5'><span className='font-black text-lightred'>SARO</span> Constructora</h1>

        {/* Seccion de video */}
        <div className='lg:w-[55%] mb-5 lg:mb-0'>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            {/* Puedes agregar más sources para otros formatos de video */}
            Tu navegador no admite la reproducción de videos.
          </video>
        </div>


        {/* Seccion de textos */}
        <div className='lg:w-[45%] flex flex-col pr-10 pl-10 gap-4'>

          <h1 className='text-[80px] h-[80px] mt-[-30px] hidden lg:block'>Acerca de </h1>
          <h1 className='text-[60px] hidden lg:block'><span className='font-black text-lightred'>SARO</span> Constructora</h1>

          <p className='text-[18px] lg:text-[16px]'>
            <span className='font-bold'>-- Elevando estandares,</span> construyendo experiencias --
          </p>

          <p className='text-[18px] lg:text-[16px] mb-5 lg:mb-0'>
            SARO Constructora es una empresa lider en la rama de la construccion de vivienda residencial, 
            comprometida a ofrecer servicios excepcionales. Tenemos mucha experiencia en el sector, ofreciendo 
            vivienda con altos estandares de calidad e innovacion
          </p>

          <div className='flex flex-row justify-center items-center h-[130px]'>

            <h1 className='text-[200px] font-black'>
              13
            </h1>

            <h3 className='text-[20px] w-[200px]'>
              <span className='font-bold'>años</span> de experiencia en el sector
            </h3>

          </div>

        </div>



      </div>

      <NavLink to='/acerca'>
        <CustomButton/>
      </NavLink>
    
    </>
  )
}


