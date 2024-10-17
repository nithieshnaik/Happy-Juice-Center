import React, { useState } from 'react' 
import './Nav.css'  
import { assets } from '../../assets/assets';


const Navbar = () => { 
   const [menu, setMenu] = useState('home') ;
  return (
    <div className='Navbar'>
       
       <img src={assets.HJC} alt="" className='Logo' /> 
        <ul className="navbar-menu">
          <li   onClick={()=>setMenu('home')} className={menu==="home"?"active ":""}>Home</li>
          <li onClick={()=>setMenu('menu')} className={menu==="menu"?"active ":""}>Menu</li>
          <li onClick={()=>setMenu('moblie-app')} className={menu==="moblie-app"?"active ":""}>Moble-App</li>
          <li onClick={()=>setMenu('Contact-us')}className={menu==="Contact-us"?"active ":""}>Contact Us</li>
        </ul> 
        <div className="navbar-right">
          <img src={assets.search_icon} alt=""  className='search'/> 
          <div className="navbar-serach-icon">
            <img src={assets.basket_icon}alt="" /> 
             <div className="dot"></div>
          </div> 
          <button>Login in</button>
        </div>
    </div>
  )
}

export default Navbar
