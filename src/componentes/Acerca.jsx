import { AcercaInfo } from "./componentes-acerca/AcercaInfo"
import { AcercaMisionVision } from "./componentes-acerca/AcercaMisionVision"
import { AcercaValores } from "./componentes-acerca/AcercaValores"
import { BottomNav } from "../navegadorBottom/BottomNav"
import marina from '../assets/01.jpg';
import GeneralButton from "../botones/GeneralButton";
import { NavLink } from "react-router-dom";

export const Acerca = () => {
  return (
    <div className="flex flex-col">

      <div className="flex lg:flex-row flex-col lg:h-[720px]">

        <div className="lg:w-[40%] ">

          <div className="flex flex-col gap-3 p-10 pl-12">
            <h3 className="font-black text-[25px]">- Acerca de</h3>

            <div className="font-black lg:text-[60px] text-[40px]">

              <h1 className="lg:h-[70px]">Conoce a <span className="text-lightred">SARO</span></h1>
              <h1> Constructora</h1>
            </div>

          </div>

          <div className="lg:w-[60%] flex items-center flex-col lg:hidden">
            <img src={marina} alt='casa marina' className="w-full h-[300px]"/>
            <NavLink to='/venta'>
              <GeneralButton texto='Conoce nuestras casas en venta' />
            </NavLink>
          </div>

          <div className="flex flex-col gap-5 lg:pl-12 pl-5 pr-5 pb-12">

            <p className="font-thin text-[20px]">
              Creemos que la arquitectura no es solo una cuestion de construir estructuras, sino de crear espacios que resuenen con la vidas y 
              sueños de las personas. Nuestra mision es diseñar y construir con una profunda comprension de las necesidades y deseos de nuestros clientes, 
              integrando sus ideas y aspiraciones en cada uno de nuestros proyectos.
            </p>

            <p className="font-thin text-[20px]">
              Desde el primer boceto hasta la utlima piedra, trabajamos en estrecha colaboracion con nuestros clientes para asegurar que cada detalle refleje su vision. Nos enorgullece nuestro enfoque personalizado, adaptando 
              nuestros servicios para ofrecer soluciones unicas y de alta calidad que van mas alla de las expectativas.
            </p>

          </div>

        </div>

        <div className="lg:w-[60%] p-10 lg:flex items-center flex-col hidden">
            <img src={marina} alt='casa marina' className="w-[800px] h-[520px]"/>
            <NavLink to='/venta'>
              <GeneralButton texto='Conoce nuestras casas en venta' />
            </NavLink>
        </div>

        <BottomNav />

        
        

      </div>

      <div className="bg-black text-white">
      <AcercaInfo />
      </div>

      <div>
        <AcercaMisionVision />
      </div>

      <div>
        <AcercaValores />
      </div>

    </div>
  )
}
