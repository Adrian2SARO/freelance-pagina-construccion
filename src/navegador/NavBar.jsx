import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <nav className='bg-black text-white text-[15px] p-4 w-[400px] h-[30px] flex flex-wrap mx-auto rounded-md' style={{ flexDirection: 'column', justifyContent: 'center' }}>
      <ul className='flex gap-5 mx-auto '>
        <li className={`hover:text-lightred ${activeIndex === 0 ? 'text-lightorange' : ''}`} onClick={() => handleClick(0)}>
          <NavLink exact to="/">Inicio</NavLink>
        </li>
        <li className={`hover:text-lightred ${activeIndex === 1 ? 'text-lightorange' : ''}`} onClick={() => handleClick(1)}>
          <NavLink exact to="/acerca">Acerca</NavLink>
        </li>
        <li className={`hover:text-lightred ${activeIndex === 2 ? 'text-lightorange' : ''}`} onClick={() => handleClick(2)}>
          <NavLink exact to="/venta">Venta</NavLink>
        </li>
        <li className={`hover:text-lightred  ${activeIndex === 3 ? 'text-lightorange' : ''}`} onClick={() => handleClick(3)}>
          <NavLink exact to="/portafolio">Portafolio</NavLink>
        </li>
        <li className={`hover:text-lightred ${activeIndex === 4 ? 'text-lightorange' : ''}`} onClick={() => handleClick(4)}>
          <NavLink exact to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}
