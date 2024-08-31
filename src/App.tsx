import { Outlet } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'

export default function App () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTasks, getScore} = useContext(ThemeContext)!

      useEffect(() => {
        getTasks()
        getScore()
    }, [])

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