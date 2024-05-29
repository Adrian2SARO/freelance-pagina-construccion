{/* Gifs */}
import comp from './assets/quality-assurance.gif';
import tech from './assets/implementation.gif';
import imp from './assets/green-technology.gif';
import comun from './assets/communications.gif';
import cump from './assets/task.gif';
import colab from './assets/teamwork.gif';


export const AcercaValores = () => {
  return (
    <div className='mb-20'>
      
      <h1 className='font-black text-[80px] text-center mb-5'>Valores</h1>

      <div className="flex flex-wrap justify-around">
        
        {/* Izquierda */}
        <div className='flex flex-col gap-10'>

          <article className="flex flex-col lg:flex-wrap gap-5 items-center">
            <img src={comp} alt='gifs' className='w-[100px]'/>
            <p className='text-[20px] font-thin w-[300px]'>Compromiso con los mas alto estandares en cada etapa del proyecto.</p>
          </article>

          <article className="flex flex-col lg:flex-wrap gap-5 items-center">
            <img src={tech} alt='gifs' className='w-[100px]'/>
            <p className='text-[20px] font-thin w-[300px]'>Aplicacion de tecnicas y tecnologias de vanguardia en arquitectura y construccion.</p>
          </article>

          <article className="flex flex-col lg:flex-wrap gap-5 items-center">
            <img src={imp} alt='gifs' className='w-[100px]'/>
            <p className='text-[20px] font-thin w-[300px]'>Implementacion de practicas respetuosas con el medio ambiente</p>
          </article>

        </div>

        {/* Derecha */}
        <div className='flex flex-col gap-10'>

          <article className="flex flex-col lg:flex-wrap gap-5 items-center">
          <img src={comun} alt='gifs' className='w-[100px]'/>
          <p className='text-[20px] font-thin w-[300px]'>Comunicacion abierta y honesta con nuestros clientes</p>
          </article>
  
          <article className="flex flex-col lg:flex-wrap gap-5 items-center">
            <img src={cump} alt='gifs'className='w-[100px]' />
            <p className='text-[20px] font-thin w-[300px]'>Cumplimiento de plazos y presupuestos acordados, con un enfoque en la satisfaccion del cliente.</p>
          </article>
  
          <article className="flex flex-col lg:flex-wrap gap-5 items-center">
            <img src={colab} alt='gifs' className='w-[100px]'/>
            <p className='text-[20px] font-thin w-[300px]'>Fomento de la colaboracion y el respeto mutuo para lograr resultados excepcionales.</p>
          </article>

        </div>

      </div>

    </div>
  )
}
