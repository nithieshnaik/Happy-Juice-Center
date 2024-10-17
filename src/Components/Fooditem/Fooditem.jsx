import React from 'react' 
import "./Fooditem.css"
import { assets } from '../../assets/assets'

const Fooditem = ( { id, name , price , description ,img}) => {
  return (
    <div className='food-item'>
       <div className="food-item-img-container">
        <img  className = 'foot-item-img'src={img} alt="" />
       </div> 
       <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>
                 {name}
            </p> 
            <img src={assets.rating_starts} alt="" /> 
        </div> 
        <p className="food-item-des">{description}</p> 
        <p className="food-item-price">{price}</p>
       </div>
    </div>
  )
}

export default Fooditem
