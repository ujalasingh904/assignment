import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const   Navbar = () => {
  return (
    <div className='flex w-full justify-center bg-transparent'>
            <nav className='py-4 w-[95%] sm:w-[90%] flex justify-between items-center '>
                <Link to='/'><span className='text-base sm:text-xl md:text-2xl font-semibold tracking-wide uppercase cursor-pointer'>The  <span className='text-white dark:bg-white dark:text-black bg-black uppercase px-2'>Product</span>  platform</span></Link>
                <DarkModeToggle/>
            </nav>
        </div>
  )
}

export default Navbar