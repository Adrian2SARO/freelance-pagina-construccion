import {useEffect, useState} from 'react'

export const AcercaInfo = () => {

  const [experiencia, setExperiencia] = useState(0);
  const [proyectos, setProyectos] = useState(0);
  const [clientes, setClientes] = useState(0);
  const [trabajadores, setTrabajadores] = useState(0);

  const objetivoExperiencia = 13;
  const objetivoProyectos = 100;
  const objetivoClientes = 200;
  const objetivoTrabajadores = 40;

  const velocidadExperiencia = 1000;
  const velocidadProyectos = 100;
  const velocidadClientes = 30;
  const velocidadTrabajadores = 1000;

  const actualizarValores = () => {
    setExperiencia((prev) => (prev < objetivoExperiencia ? prev + 1 : objetivoExperiencia));
    setProyectos((prev) => (prev < objetivoProyectos? prev + 1 : objetivoProyectos));
    setClientes((prev) => (prev < objetivoClientes? prev + 1 : objetivoClientes));
    setTrabajadores((prev) => (prev < objetivoTrabajadores? prev + 1 : objetivoTrabajadores));
  }

  useEffect(() => {
    const intervalExperiencia = setInterval( actualizarValores, velocidadExperiencia);
    const intervalProyectos = setInterval( actualizarValores, velocidadProyectos);
    const intervalClientes = setInterval( actualizarValores, velocidadClientes);
    const intervalTrabajadores = setInterval( actualizarValores, velocidadTrabajadores);

    return() => {
      clearInterval(intervalExperiencia);
      clearInterval(intervalProyectos);
      clearInterval(intervalClientes);
      clearInterval(intervalTrabajadores);
    }

  }, []);

  return (
    <div className='flex flex-wrap justify-around'>

        <article className='flex items-center gap-4'>
          <h1 className='font-black text-[80px]'>+{experiencia}</h1>
          <h2 className='font-thin w-[110px]'>años en el sector</h2>
          
        </article>

        <article className='flex items-center gap-4'>
          <h1 className='font-black text-[80px]'>+{proyectos}</h1>
          <h2 className='font-thin w-[110px]'>proyectos completados</h2>
          
        </article>

        <article className='flex items-center gap-4'>
          <h1 className='font-black text-[80px]'>+{clientes}</h1>
          <h2 className='font-thin w-[110px]'>clientes satisfechos</h2>
          
        </article>

        <article className='flex items-center gap-4'>
          <h1 className='font-black text-[80px]'>+{trabajadores}</h1>
          <h2 className='font-thin w-[110px]'>trabajadores activos</h2>
        </article>

    </div>
  )
}
