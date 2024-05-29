import { NavLink } from 'react-router-dom'
import LogoutButton from '../botones/LogoutButton'

export const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-black flex p-1'>
        <NavLink to='/'>
            <LogoutButton />
        </NavLink>
    </div>
  )
}
