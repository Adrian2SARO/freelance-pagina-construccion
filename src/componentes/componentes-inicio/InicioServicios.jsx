import { useState, useEffect } from 'react';
import styled from 'styled-components';
import construccion from './assets/assets-servicios/brutalist-inspiration-architecture-background.jpg';
import ampliacion from './assets/assets-servicios/low-angle-building-construction.jpg';
import remodelacion from './assets/assets-servicios/vertical-grayscale-shot-staircase-outside-building-used-reconstruction.jpg';
import disenios from './assets/assets-servicios/monochromatic-urban-minimal-landscape.jpg';
import mantenimiento from './assets/assets-servicios/steel-wrenches-tools.jpg';

const SpanPer = styled.span`
  font-weight: bold;
`;

const services = [
  { src: construccion, alt: 'casas', label: 'Construccion' },
  { src: ampliacion, alt: 'casas', label: 'Ampliacion' },
  { src: remodelacion, alt: 'casas', label: 'Remodelacion' },
  { src: disenios, alt: 'casas', label: 'Diseño' },
  { src: mantenimiento, alt: 'casas', label: 'Mantenimiento' },
];

export const InicioServicios = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    let isMounted = true; // Control para evitar actualización del estado después del desmontaje del componente

    const showItems = async () => {
      for (let i = 0; i < services.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Espera 500ms antes de mostrar el siguiente artículo
        if (isMounted) {
          setVisibleItems((prevItems) => [...prevItems, services[i]]);
        }
      }
    };

    showItems();

    return () => {
      isMounted = false; // Cleanup para evitar actualizaciones en estado después del desmontaje
    };
  }, []);

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col items-end pr-5 mb-5'>
        <h1 className='text-[60px]'>Servicios</h1>
        <h1 className='text-[50px] font-bold text-lightred'>
          SARO <span className='text-[50px] text-white font-normal'>Constructora</span>
        </h1>
      </div>

      <div className='flex flex-wrap justify-around'>
        {visibleItems.map((service, index) => (
          <article key={index} className='flex flex-col gap-3'>
            <img src={service.src} alt={service.alt} className='w-[250px]' />
            <p className='font-bold'>{service.label}</p>
          </article>
        ))}
      </div>

      <div className='flex flex-col gap-5'>
        <h3>
          En <SpanPer className='text-lightred'>SARO</SpanPer> Constructora, ofrecemos una amplia gama de servicios para{' '}
          <SpanPer>satisfacer</SpanPer> todas tus <SpanPer>necesidades</SpanPer> en el ámbito <SpanPer>inmobiliario</SpanPer> y de{' '}
          <SpanPer>construcción</SpanPer>:
        </h3>

        <ul className='flex gap-2 flex-col list-disc pl-5'>
          <li>
            <SpanPer>Construcción:</SpanPer> Desarrollamos proyectos de <SpanPer>construcción</SpanPer> desde la planificación hasta la entrega, garantizando{' '}
            <SpanPer>calidad</SpanPer> y cumplimiento de plazos.
          </li>
          <li>
            <SpanPer>Remodelación:</SpanPer> Transformamos tus espacios existentes para darles una nueva <SpanPer>vida</SpanPer>, adaptándonos a tus gustos y
            necesidades.
          </li>
          <li>
            <SpanPer>Diseños:</SpanPer> Creamos <SpanPer>diseños</SpanPer> que combinan <SpanPer>funcionalidad</SpanPer> y <SpanPer>estética</SpanPer>, asegurando
            que cada proyecto sea único.
          </li>
          <li>
            <SpanPer>Mantenimiento:</SpanPer> Ofrecemos servicios de <SpanPer>mantenimiento</SpanPer> para mantener tus propiedades en <SpanPer>óptimas</SpanPer>{' '}
            condiciones, prolongando su vida útil y valor.
          </li>
          <li>
            <SpanPer>Ampliación:</SpanPer> Ampliamos tus espacios para que se adapten a tu <SpanPer>crecimiento</SpanPer>, asegurando que cada{' '}
            <SpanPer>proyecto</SpanPer> se integre perfectamente con la estructura existente.
          </li>
        </ul>
      </div>
    </div>
  );
};
