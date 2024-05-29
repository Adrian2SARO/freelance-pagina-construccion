import casa from '../assets/IMG_4748.jpg';
import casa2 from '../assets/Lagunas.jpeg';
import logo from '../assets/LogoSaro-removebg2.png';
import GeneralButton from '../botones/GeneralButton';
import { BottomNav } from '../navegadorBottom/BottomNav';

{/* Fichas Tecnicas */}
import pt from '/FICHAPUNTATIBURONLAGUNAS3.pdf';
import st from '/FICHASTAMARIAMZ28LT8.pdf';

export const Venta = () => {
  return (
    <div>
      
      <div className='flex justify-center h-[145px] items-center'>
        
        <img src={logo} alt='logoSARO' className='w-[82px] h-[57px] hidden lg:block'/>
        <h2 className='lg:w-[90%] lg:text-[120px] text-[18vw] font-black text-center'>EN VENTA</h2>

      </div>

      <div className='bg-darkgray flex flex-col lg:flex-row gap-5 pt-10 items-center lg:pr-10 lg:pl-10 lg:justify-evenly'>


        <article className='lg:w-[370px] h-auto gap-5 flex flex-col relative'>
          <h3 className='text-center text-white font-black text-[30px]'>Punta Tiburon</h3>
          <div className="relative">
            <img src={casa} alt='casa-tiburon' className='h-[540px] object-cover' />
            <div className="cursor-pointer flex gap-5 flex-col absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-80 transition-opacity duration-300  items-center justify-center">
              <ul className="text-white">
                <li>
                  <p>Ubicacion: Lomas de la Rioja</p>
                </li>
                <li>
                  <p>Seccion: Puerta de Alcala</p>
                </li>
                <li>
                  <p>Calle: Santa Maria de la Real</p>
                </li>
                <li>
                  <p>Manzana: 28</p>
                </li>
                <li>
                  <p>Lote: 8</p>
                </li>
                <li>
                  <p>Construccion: 211 m2</p>
                </li>
                <li>
                  <p>Terreno: 162 m2</p>
                </li>
              </ul>
              <h2 className='font-bold text-lightred text-[20px]'>Caracteristicas</h2>
              <ul className='text-white'>
                <li>
                  <p>Baños completos: 3</p>
                </li>
                <li>
                  <p>Recamaras: 3</p>
                </li>
                <li>
                  <p>Recamaras: 3</p>
                </li>
                <li>
                  <p>Cocina: Completa</p>
                </li>
                <li>
                  <p>Sala de estar: si</p>
                </li>
                <li>
                  <p>Cochera: 2 carros</p>
                </li>
              </ul>

              
            </div>
          </div>
          <h3 className=' text-center text-[30px] font-black bg-black text-white rounded-sm'>$3,265,000.00</h3>
          <p className='lg:w-[250px] text-center text-white'>Lagunas III, calle Ruidera #2, MZ1 Lote 20</p>
          <a href='/FICHASTAMARIAMZ28LT8.pdf' download={st} >
            <GeneralButton texto="Descargar ficha tecnica" />
          </a>
        </article>

        <article className='lg:w-[370px] h-auto gap-5 flex flex-col relative'>
          <h3 className='text-center text-white font-black text-[30px]'>Punta Tiburon</h3>
          <div className="relative">
            <img src={casa2} alt='casa-tiburon' className='h-[540px] object-cover' />
            <div className="flex-col gap-5 absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
              <ul className="text-white">
                <li>
                  <p>Ubicacion: Punta Tiburon</p>
                </li>
                <li>
                  <p>Seccion: Lagunas III</p>
                </li>
                <li>
                  <p>Calle: Ruidera #2</p>
                </li>
                <li>
                  <p>Manzana: 1</p>
                </li>
                <li>
                  <p>Lote: 20</p>
                </li>
                <li>
                  <p>Construccion: 292 m2</p>
                </li>
                <li>
                  <p>Terreno: 262 m2</p>
                </li>
              </ul>

              <h2 className='font-bold text-lightred text-[20px]'>Caracteristicas</h2>
              <ul className='text-white'>
                <li>
                  <p>Baños completos: 3</p>
                </li>
                <li>
                  <p>Recamaras: 3</p>
                </li>
                <li>
                  <p>Recamaras: 3</p>
                </li>
                <li>
                  <p>Cocina: Completa</p>
                </li>
                <li>
                  <p>Sala de estar: si</p>
                </li>
                <li>
                  <p>Cochera: 2 carros</p>
                </li>
              </ul>

            </div>
          </div>
          <h3 className=' text-center text-[30px] font-black bg-black text-white rounded-sm'>$6,335,000.00</h3>
          <p className='lg:w-[250px] text-center text-white'>Lagunas III, calle Ruidera #2, MZ1 Lote 20</p>
          <a href='/FICHAPUNTATIBURONLAGUNAS3.pdf'download={pt}>
            <GeneralButton texto="Descargar ficha tecnica" />
          </a>
          
        </article>

      </div>

      <hr />

      <BottomNav />

    </div>
  )
}

