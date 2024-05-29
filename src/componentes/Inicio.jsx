import { NavBar } from "../navegador/NavBar";
import casa from '../assets/casa1PT.jpg';
import logo from '../assets/LogoSaro-removebg2.png'
import BotonFacebook from "../botones/BotonFacebook";
import BotonInstagram from "../botones/BotonInstagram";
import BotonX from "../botones/BotonX";

{/* Imagenes */}
import casa1 from '../assets/01.jpg';
import casa2 from '../assets/fachada_Anton.jpg';
import casa3 from '../assets/joaks.png';
import { InicioAcerca } from "./componentes-inicio/InicioAcerca";
import { InicioObras } from "./componentes-inicio/InicioObras";
import { InicioServicios } from "./componentes-inicio/InicioServicios";
import { InicioContacto } from "./componentes-inicio/InicioContacto";
import fondo from '../componentes/componentes-inicio/assets/shot-panoramic-composition-empty-interior.jpg'
import { InicioObrasTel } from "./componentes-inicio/InicioObrasTel";
import { IncioServiciosTel } from "./componentes-inicio/IncioServiciosTel";

export const Inicio = () => {

  return (

    <>

      <div className="flex flex-col bg-cover h-[800px] lg:h-auto pt-5" style={{ backgroundImage: `url(${casa})` }}>
        
        <div className="flex items-center pr-4 pl-4">
          
          <img src={logo} alt="logo-saro" className="w-[82px] lg:block hidden"/>

          <NavBar />

        </div>

        <div className="flex flex-col lg:p-[100px] mt-[80px] p-[10px] pt-[150px]">

          <h1 className="font-black lg:h-[140px] text-animation"><span className="lg:text-[120px] text-[50px] font-black text-lightred ">SARO</span></h1>
          <h1 className="lg:text-[100px] text-[50px] font-black text-animation">Constructora</h1>

        </div>

        <div className="bg-black bg-opacity-60 flex mt-[102px]">

          <article className="flex flex-col lg:w-[30%] p-10 justify-center items-center gap-5">

            <div className="flex flex-row gap-5">

              <BotonFacebook/>
              <BotonInstagram />
              <BotonX />

            </div>

            <div className="flex flex-wrap">

              <p className="text-center text-white">
                Siguenos en nuestras redes socielas y unete a nuestra comunidad
                de clientes satisfechos. Estamos listos para compartir contigo todo lo que 
                necesitas saber para tomar las mejores decisiones en bienes raices y construccion.
              </p>

            </div>
            
          </article>

          <article className=" flex-row w-[70%] gap-5 justify-center items-center hidden lg:flex">

            <img src={casa1} alt='casa-1' className="w-[300px] h-[180px]"/>
            <img src={casa2} alt='casa-2' className="w-[300px] h-[180px]"/>
            <img src={casa3} alt='casa-3' className="w-[300px] h-[180px]"/>

          </article>

        </div>

      </div>

      <div className="pt-10 pr-5 pl-5">
        <InicioAcerca />
      </div>

      <div className="pt-5 pr-10 pl-10 mt-[-40px] bg-darkgray pb-10 hidden lg:block">
        <InicioObras />
      </div>
      
      <div className="lg:hidden bg-darkgray">
        <InicioObrasTel />
      </div>

      <div className="p-10 bg-black text-white hidden lg:block">
        <InicioServicios />
      </div>

      <div className="lg:hidden">
        <IncioServiciosTel />
      </div>

      <div className="bg-cover lg:h-[700px]" style={{ backgroundImage: `url(${fondo})` }}>
        <InicioContacto/>
      </div>

    </>

  )
}
