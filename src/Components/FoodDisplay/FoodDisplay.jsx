import React, { useContext } from 'react' 
import './FoodDisplay.css'

import { StoreContext } from '../../Context/storeContext'
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ( {category}) => { 

 const {food_list} = useContext(StoreContext) ;
  return (
    <div className='food-display'  id='food-display'> 
    <h2> Top Dishes For you  </h2> 
     <div className="food-display-list">
         {
          food_list.map(( items , index)=>{
            return  <Fooditem  key = {index }  id = {items._id } name={items.name} description={items.description}  price={ items.price }  img={items.image} />

          })
         }
     </div>
      
    </div>
  )
}

export default FoodDisplay
