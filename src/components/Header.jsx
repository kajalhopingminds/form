import React from 'react'
import logo from '../logo192.png'
const Header = () => {
  return (
    <div className='bg-[#FDF7F4] flex py-4 justify-evenly list-none items-center'>
      <div>
         <img src={logo} alt='logo img' className='h-20 w-20'/>
      </div>
        <li ><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li ><a href="#about">About us</a></li>
        <li><a href="#contact">Contact</a></li>
       <div>
        <button className='border-2 border-black text-[#ffffff] py-2 px-8 rounded-md bg-[#1F509A]'>Login</button>
       </div>
    </div>

    
  )
}

export default Header;