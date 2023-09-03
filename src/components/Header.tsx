import React from 'react'
import { useLocation } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { useAppDispatch } from '../app/store'
import { setResponsive } from '../app/app/appSlice'
const Header = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    let navTitle = "Contact Page"
    if(location.pathname === "/map"){
        navTitle = "Map & Charts"
    }
    const handleClick = (e:React.MouseEvent<SVGAElement>)=>{
        dispatch(setResponsive())
    }

  return (
    <nav className='w-full bg-primary top-0 left-0 fixed z-10 h-14 px-5 ls:h-16 flex justify-between ls:justify-center items-center text-tertiary'>
        <AiOutlineMenu className='ls:hidden cursor-pointer' size={20} onClick={handleClick} />
      <h1 className='text-xl ls:text-2xl'>{navTitle}</h1>
    </nav>
  )
}

export default Header
