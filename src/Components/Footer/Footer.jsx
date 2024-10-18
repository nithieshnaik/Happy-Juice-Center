import React from 'react' 
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer'  id="footer">  
     <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.HJC}  className ="Logo" alt="" /> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quod totam fugit, iure accusamus sit voluptatem aliquid hic quam aliquam perspiciatis repudiandae, aut ut sed corporis voluptatibus optio aspernatur sint?</p>
            <div className="footer-icons">
                <img src= {assets.facebook_icon} alt="" /> 
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div> 
        <div className="footer-content-center"> 
            <h2>Company</h2>
             <ul>
                <li> Home </li>
                <li> About</li>
                <li> Delivery</li> 
                <li> Privacy Policy</li>
             </ul>

        </div>
        <div className="footer-content-right"> 
            <h2>Get in Touch</h2> 
            <ul>
                <li>+91 000 000 0000</li>
                <li> happyjuciecenter@gmail.com</li>
            </ul>

        </div>
     </div> 
       <hr />
      
      <p className='footer-copyright'> Copyright 2024 @ happyjuciecenter.com - All Right Reserved </p>
    </div>
  )
}

export default Footer
