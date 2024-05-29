import styled from 'styled-components';
import { SwipeCarousel } from './swiper/SwiperCarousel';


const SpanPer = styled.span`
  font-weight: bold;
`;

export const IncioServiciosTel = () => {
  return (
    <div className='bg-black text-white'>

        <SwipeCarousel />

        <div className='flex flex-col gap-5 p-5'>

            <h3 className='text-[20px]'>
            En <SpanPer className='text-lightred'>SARO</SpanPer> Constructora, ofrecemos una amplia gama de servicios para{' '}
            <SpanPer>satisfacer</SpanPer> todas tus <SpanPer>necesidades</SpanPer> en el ámbito <SpanPer>inmobiliario</SpanPer> y de{' '}
            <SpanPer>construcción</SpanPer>:
            </h3>

            <ul className='flex gap-2 flex-col list-disc pl-5 text-[20px]'>
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
  )
}
