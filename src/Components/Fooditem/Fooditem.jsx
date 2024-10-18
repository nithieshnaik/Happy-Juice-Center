import React, { useContext } from 'react' 
import "./Fooditem.css"
import { assets } from '../../assets/assets' 
import { StoreContext } from '../../Context/storeContext';
 
 

const Fooditem = ( { id, name , price , description ,img}) => { 

    
    const { cartitems , addcart , removefromcart } = useContext(StoreContext) ;
  return (
    <div className='food-item'>
       <div className="food-item-img-container">
        <img  className = 'foot-item-img'src={img} alt="" /> 
         
        {
             !cartitems[id]
             ?<img className='add'  onClick={()=>addcart(id)} src={assets.add_icon_white} alt='' /> :

             <div className="food-items-container">
                  <img src={assets.remove_icon_red}  onClick={()=>removefromcart(id)}  alt="" /> 
                  <p>{cartitems[id]}</p> 
                  <img src={assets.add_icon_green}  onClick={()=>addcart(id)}  alt="" />
             </div>
          }


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
