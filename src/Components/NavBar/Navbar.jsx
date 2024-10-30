import React, { useState } from 'react' 
import './Nav.css'  
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = ({setshowlogin}) => { 
   const [menu, setMenu] = useState('home') ;
  return (
    <div className='Navbar'>
       
       <img src={assets.HJC} alt="" className='Logo' /> 
        <ul className="navbar-menu">
          <Link  to ='/'  onClick={()=>setMenu('home')} className={menu==="home"?"active ":""}>Home</Link>
          <a   href='#explore-menu'   onClick={()=>setMenu('menu')} className={menu==="menu"?"active ":""}>Menu</a>
          <a href = '#Quote' onClick={()=>setMenu('moblie-app')} className={menu==="moblie-app"?"active ":""}>Moble-App</a>
          <a  href='#footer'     onClick={()=>setMenu('Contact-us')}className={menu==="Contact-us"?"active ":""}>Contact Us</a>
        </ul> 
        <div className="navbar-right">
          <img src={assets.search_icon} alt=""  className='search'/> 
          <div className="navbar-serach-icon">
            <img src={assets.basket_icon } className='basket'alt="" /> 
             <div className="dot"></div>
          </div> 
          <button onClick={()=>setshowlogin(true)}>Login in</button>
        </div>
    </div>
  )
}

export default Navbar
