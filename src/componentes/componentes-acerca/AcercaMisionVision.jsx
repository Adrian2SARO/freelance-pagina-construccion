
export const AcercaMisionVision = () => {
  return (
    <div className='flex lg:flex-row flex-col lg:p-5'>

      <article className='flex flex-col lg:w-1/2 items-center bg-lightred p-10 gap-5'>
        <h1 className='font-black text-[80px] text-black'>Mision</h1>
        <p className='lg:text-[20px] p-5 text-[30px] font-thin text-black w-[400px]'>Nuestra mision es transformar espacios y mejorar vidas a traves de soluciones
          arquitectonicas y constructivas que reflejan las necesidades y sueños de nuestros clientes, integrando 
          sostenibilidad, innovacion y excelenecia en cada proyecto. 
        </p>
      </article>

      <article className='flex flex-col lg:w-1/2 items-center bg-darkgray p-10 gap-5'>
        <h1 className='font-black text-[80px] text-white'>Vision</h1>
        <p className='lg:text-[20px] p-5 text-[30px] font-thin text-white w-[400px]'>Ser reconocidos como lideres en la industria, comprometidos con la creacion de espacios unicos y funcionales, 
          que contribuyan positivamente al entorno y al bienestar de las comunidades en las que operamos 
        </p>
      </article>

    </div>
  )
}
