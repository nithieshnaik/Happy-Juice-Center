import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ( { category , setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'> 
      <h1>Expore our Menu</h1> 
       <p className="explore-menu-text"> Lorem ipsum dolor  Voluptas porro aliquid, suscipit consequuntur officiis ipsam minima id nam pariatur qui vel quo placeat ipsum totam facere odit, ex illo sequi.</p>   
        <div className="explore-menu-list">
            {menu_list.map(( item , index)=>{
                return (
                    <div className="explore-menu-list-item" key={index} onClick={()=>{ setcategory(prev=> prev===item.menu_name?"All" :item.menu_name)}}>
                        <img  className ={category===item.menu_name ?"active":""} src={item.menu_image} alt="" /> 
                        <p>{item.menu_name}</p>
                    </div> 
                    
                )
            })}
        </div> 
        <hr/>
    </div>
  )
}

export default ExploreMenu
