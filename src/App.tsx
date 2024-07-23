import { Outlet } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { useState } from 'react'

export default function App () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    function openMenu() {
        setIsMenuOpen(true)
    }
    function closeMenu() {
        setIsMenuOpen(false)
    }

  return (
    <div className='bg-slate-900'>
      <Navbar closeMenu={closeMenu} isMenuOpen={isMenuOpen} openMenu={openMenu} />
      <Outlet/>
    </div>
  )
  
}