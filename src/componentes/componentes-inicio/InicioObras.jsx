{/* Imagenes */}
import casaPL from './assets/casa-un-piso.jpeg';
import casaLM from './assets/casa-blanco-negro.jpeg';
import casaLM2 from './assets/casa-cemento.jpeg';

{/* Iconos */}
import flecha from './assets/iconos/back.png';

export const InicioObras = () => {
  return (
    <div className="lg:flex flex-col justify-center items-center hidden ">

      <h2 className="text-[40px] text-white">
        <span className="text-lightred font-bold">SARO</span> Constructora
      </h2>

      <div className="flex flex-row p-5 justify-center items-center"> 

        <h2 className="text-[80px] font-black text-white w-1/2 p-10 ">
          Obras en proceso
        </h2>

        <p className="font-extra-thin text-white text-[20px] w-1/2 border-l-2 p-10">
          Nos enorgullece compartir los avances de nuestros proyectos en curos. 
          Cada obra es un testimonio de nuestro compromiso con la calidad, la innovacion y la excelencia en la construccion.
        </p>

      </div>

      <div className="flex flex-col justify-center items-center gap-5">

      <article className="relative flex flex-row items-center justify-start">

        <div className="bg-white flex gap-10 absolute left-0 -translate-x-1/2 h-[150px] p-5 flex-row w-[300px] items-center z-10">
          <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
            <h3 className="text-[30px] font-bold">Punto Lomas</h3>
            <p>Calle calzada</p>
          </div>
          <img src={flecha} alt="flecha-1" className="transform rotate-180 w-[10%] h-[30px]" />
        </div>
        
        <img src={casaPL} alt="casa-un-piso" className="w-[700px] h-[400px] object-cover" />

      </article>

      <article className="relative flex flex-row items-center justify-start">

        <div className="bg-white flex gap-10 absolute left-0 -translate-x-1/2 h-[150px] p-5 flex-row w-[300px] items-center z-10">
          <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
            <h3 className="text-[30px] font-bold">Lomas del Dorado</h3>
            <p>Barran de Cobre</p>
          </div>

          <img src={flecha} alt="flecha-1" className="transform rotate-180 w-[10%] h-[30px]" />

        </div>
        
        <img src={casaLM} alt="casa-un-piso" className="w-[700px] h-[400px] object-cover" />
      </article>

      <article className="relative flex flex-row items-center justify-start">

        <div className="bg-white flex gap-10 absolute left-0 -translate-x-1/2 h-[150px] p-5 flex-row w-[300px] items-center z-10">
          <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
            <h3 className="text-[30px] font-bold">Lomas del Dorado</h3>
            <p>Barran de Cobre</p>
          </div>
          <img src={flecha} alt="flecha-1" className="w-[10%] transform rotate-180 h-[30px]" />
        </div>
        
        <img src={casaLM2} alt="casa-un-piso" className="w-[700px] h-[400px] object-cover" />

      </article>

      </div>

    </div>
  )
}
