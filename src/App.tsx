import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes , Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import OrderSummary from './OrderSummary'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import NewProducts from './NewProducts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order-summary' element={<OrderSummary />}/>
        <Route path='/products' element={<Products />}>
          <Route path='featured-products' element={<FeaturedProducts />} />
          <Route path='new-products' element={<NewProducts />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
