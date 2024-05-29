import BotonFacebook from "../botones/BotonFacebook"
import BotonInstagram from "../botones/BotonInstagram"
import BotonX from "../botones/BotonX"
import { BottomNav } from "../navegadorBottom/BottomNav"
import { Formulario } from "../formulario/Formulario"
import MapEmbed from "../assets/mapa/MapEmbed"

export const Contacto = () => {
  return (
    <div className="flex lg:flex-row flex-col">

      <div className="lg:w-1/2 flex flex-col">

        <div className='h-[45%] flex flex-col pl-10 pr-5 gap-5'>

          <div className="mb-5 lg:mb-0">
            <h1 className="lg:text-[60px] text-[50px]">Contacto</h1>
            <h2 className="lg:text-[50px] text-[40px]"><span className="text-lightred font-black">SARO</span> Constructora</h2>
          </div>

          <div className="lg:flex lg:flex-row flex-col gap-5 lg:justify-around items-center hidden">
            
            <article className="flex flex-row gap-5">
            <BotonFacebook />
            <BotonInstagram />
            <BotonX />
            </article>

            <article className="flex flex-col gap-2">
              <p className="font-bold">Correo electronico: </p>
              <p>saro211116@hotmail.com</p>
            </article>

            <article className="flex flex-col gap-2">
              <p className="font-bold">Numero telefonico</p>
              <p>+52-229-519-8327</p>
              <p>+52-229-207-1397</p>
            </article>

          </div>

        </div>

        <div className='h-[55%] flex flex-col gap-5 lg:hidden'>
          <MapEmbed />
          <div className="flex lg:flex-row flex-col gap-5 lg:justify-around items-center">
            
            <article className="flex flex-row gap-5">
            <BotonFacebook />
            <BotonInstagram />
            <BotonX />
            </article>


          </div>
          <div className='lg:hidden flex justify-evenly mb-5'>
            <article className="flex flex-col gap-2">
                <p className="font-bold">Correo electronico: </p>
                <p>saro211116@hotmail.com</p>
            </article>

            <article className="flex flex-col gap-2">
              <p className="font-bold">Numero telefonico</p>
              <p>+52-229-519-8327</p>
              <p>+52-229-207-1397</p>
            </article>
          </div>
        </div>

      </div>


      <div className='lg:w-1/2 bg-black flex flex-col justify-center items-center p-10 h-auto gap-10'>
        <Formulario />
        <h3 className='text-lightred font-bold'>Horarios</h3>
        <h3 className='text-white'>
          Lunes a Viernes: 9:00 am - 17:00 pm <br />
          Sabado: 9:00 am - 13:00 pm <br />
          Doming: NO atendemos
        </h3>
      </div>

      <BottomNav />

    </div>
  )
}
