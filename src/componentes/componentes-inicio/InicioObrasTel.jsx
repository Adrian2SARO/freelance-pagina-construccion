{/* Imagenes */}
import casaPL from './assets/casa-un-piso.jpeg';
import casaLM from './assets/casa-blanco-negro.jpeg';
import casaLM2 from './assets/casa-cemento.jpeg';

{/* Iconos */}
import flecha from './assets/iconos/back.png';

import styled from 'styled-components';

const TextoVertical = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px; /* Altura del div */
    justify-content: space-between; /* Espacio entre las letras */
    `;

const TextoVerticalItem = styled.span`
writing-mode: vertical-lr; /* Texto vertical de izquierda a derecha */
text-orientation: upright; /* Orientación del texto vertical */
`;

export const InicioObrasTel = () => {
  return (
    <div className='flex pt-10 pb-20'>
        
        <div className='bg-white w-[15%] items-center justify-center pt-[120px]'>
            <TextoVertical className=''>
                <TextoVerticalItem className='text-black text-[40px] font-black'>OBRAS</TextoVerticalItem>
                <br />
                <TextoVerticalItem className='text-black text-[40px] font-black'>EN</TextoVerticalItem>
                <br />
                <TextoVerticalItem className='text-black text-[40px] font-black'>PROCESO</TextoVerticalItem>
            </TextoVertical>
        </div>

        <div className="flex flex-col justify-center items-center gap-20 w-[85%]">

            <article className="relative flex flex-col items-center justify-start">

                <img src={casaPL} alt="casa-un-piso" className="w-[360px] h-[300px] object-cover" />

                <div className="bg-white flex gap-10 absolute bottom-[100px] translate-y-full h-[150px] p-5 flex-row w-[300px] items-center z-10">
                <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
                    <h3 className="text-[20px] font-bold">Punto Lomas</h3>
                    <p>Calle calzada</p>
                </div>
                <img src={flecha} alt="flecha-1" className="transform rotate-180 w-[10%] h-[30px]" />
                </div>

            </article>


            <article className="relative flex flex-col items-center justify-start">

                <img src={casaLM} alt="casa-un-piso" className="w-[360px] h-[300px] object-cover" />

                <div className="bg-white flex gap-10 absolute bottom-[100px] translate-y-full h-[150px] p-5 flex-row w-[300px] items-center z-10">
                <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
                    <h3 className="text-[20px] font-bold">Lomas del Dorado</h3>
                    <p>Circuito Paisajes, calle Barranca del Cobre, Lt11 Mz 20</p>
                </div>
                <img src={flecha} alt="flecha-1" className="transform rotate-180 w-[10%] h-[30px]" />
                </div>

            </article>


            <article className="relative flex flex-col items-center justify-start">

                <img src={casaLM2} alt="casa-un-piso" className="w-[360px] h-[300px] object-cover" />

                <div className="bg-white flex gap-10 absolute bottom-[100px] translate-y-full h-[150px] p-5 flex-row w-[300px] items-center z-10">
                <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
                    <h3 className="text-[20px] font-bold">Lomas del Dorado</h3>
                    <p>Circuito Paisajes, calle Barranca del Cobre, Lt12 Mz 20</p>
                </div>
                <img src={flecha} alt="flecha-1" className="transform rotate-180 w-[10%] h-[30px]" />
                </div>

            </article>

        </div>

    </div>
  )
}
