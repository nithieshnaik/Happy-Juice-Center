import React, { useState } from 'react' 
import './LoginPop.css' 
import { assets } from '../../assets/assets'

// const [ currstate , setcurrstate] = useState('sign up')

const LoginPop = ({setshowlogin}) => {
  return (
    <div className='login -Pop'> 
     <form className='login -popup-container'> 
        <div className="login-popup-title"> 
            {/* <h2>{currstate}</h2>  */}
            <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div> 

     </form>
     </div>
  )
}

export default LoginPop
