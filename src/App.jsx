import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className='app'>
        <Navbar/> 
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
