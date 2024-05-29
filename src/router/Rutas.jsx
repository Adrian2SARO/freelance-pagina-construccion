import { Route, Routes } from "react-router"
import { Inicio } from "../componentes/Inicio"
import { Acerca } from "../componentes/Acerca"
import { Contacto } from "../componentes/Contacto"
import { Venta } from "../componentes/Venta"
import { Portafolio } from "../componentes/Portafolio"

export const Rutas = () => {
  return (
    <div className="">

        <Routes>

            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/venta" element={<Venta />} />
            <Route path="/portafolio" element={<Portafolio />} />

        </Routes>


    </div>
  )
}
