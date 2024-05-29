import { BottomNav } from "../navegadorBottom/BottomNav"
import Carousel from "../Carousel/Index";

{/* Iconos */}
import worker from '../assets/iconos/manager.png';
import arquitectura from '../assets/iconos/modern-architecture.png';
import compromiso from '../assets/iconos/tick.png';
import calidad from '../assets/iconos/quality-assurance.png';


export const Portafolio = () => {
  return (
    <div className="bg-black text-white">

      <div className="flex flex-col gap-3 p-10 pl-12">
        <h3 className="font-black text-[25px]">- Portafolio</h3>

        <div className="font-black lg:text-[60px] text-[35px]">

          <h1 className="lg:h-[70px]">Casas construidas por</h1>
          <h1><span className="text-lightred">SARO</span> Constructora</h1>
        </div>

      </div>

      <div className="flex flex-wrap justify-around">

        <article className="border-2 border-white p-10 w-[300px] flex flex-col items-center gap-4">

          <img src={worker} alt="trabajador" className="w-[70px]" />
          <h3 className="font-black text-[20px] text-center">
            Experiencia de construccion en fraccionamientos 
          </h3>
          <p className='text-[16px] text-center'>
            Nos adherimos a reglas, garantizando armonia y calidad en fraccionamientos residenciales
          </p>
          
        </article>

        <article className="border-2 border-white p-10  w-[300px] flex flex-col items-center gap-4">

          <img src={arquitectura} alt="arquitectura" className="w-[70px]" />
          <h3 className="font-black text-[20px]">
            Tu estilo, nuestra creacion
          </h3>
          <p className='text-[16px]'>
            Diseñamos hogares que reflejan tu personalidad y tus gustos.
          </p>

        </article>

        <article className="border-2 border-white p-10  w-[300px] flex flex-col items-center gap-4">

          <img src={compromiso} alt="compromiso" className="w-[70px]" />
          <h3 className="font-black text-[20px]">
            Cumplimiento de compromiso
          </h3>
          <p className='text-[16px]'>
            Plazos cumplidos con dedicacion
          </p>

        </article>

        <article className="border-2 border-white p-10  w-[300px] flex flex-col items-center gap-4">

          <img src={calidad} alt="calidad" className="w-[70px]" />
          <h3 className="font-black text-[20px]">
            Calidad y precio
          </h3>
          <p className='text-[16px]'>
            Construccion excepcional, precios accesibles y muestra de calidad en material y en mano de obra.
          </p>

        </article>

      </div>

      {/* Carrousel infinito */}
      <div className="mt-8 overflow-x-hidden">
        <Carousel/>
      </div>

      <BottomNav />
    </div>
  )
}
