import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPop from './Components/LoginPop/LoginPop'


function App() {
  const [count, setCount] = useState(0) 
   
  const [showLogin ,setshowlogin] = useState(false) 

  return (
    <>  
      {showLogin ?<LoginPop setshowlogin ={setshowlogin}/>:<></>}
      <div className='app'>
        <Navbar setshowlogin ={setshowlogin}/> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='PlaceOrder' element={<PlaceOrder/>}/>
        </Routes>
       
      </div> 
      <Footer/>
      
    </>
  )
}

export default App
