import React, { useState } from 'react' 
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu' 
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Quote from '../../Components/Quote/Quote'

const Home = () => { 
   const [category , setcategory] =useState("All") ;
  return (
    <div> 
      <Header/> 
      <ExploreMenu category ={category}  setcategory={setcategory}/> 
      <FoodDisplay category ={category} /> 
      <Quote/>
      
    </div>
  )
}

export default Home
