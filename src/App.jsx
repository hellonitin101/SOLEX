import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Wishlist from './Components/Wishlist/Wishlist'
import Cart from './Components/Cart/Cart'
import Viewall from './Components/All-Product/Viewall'
import Popup from './Components/Add/Popup'

import { Toaster } from 'react-hot-toast'


const App = () => {

  const [company, setCompany] = useState('All')
  const [category, setCategory] = useState('All')

  // Wishlist Local Storage se load
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  // Cart Local Storage se load
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Wishlist save
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  // Cart save
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <BrowserRouter>

      <Navbar wishlist={wishlist} cart={cart} />

      <Toaster position="top-center" />

      {/* Popup */}
      <Popup />

      <div className='pt-[110px]'>
        <Routes>

          <Route
            path='/'
            element={
              <Home
                company={company}
                setCompany={setCompany}
                category={category}
                setCategory={setCategory}
                wishlist={wishlist}
                setWishlist={setWishlist}
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path='/wishlist'
            element={
              <Wishlist
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />

          <Route
            path='/cart'
            element={
              <Cart
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path='/viewall'
            element={
              <Viewall
                wishlist={wishlist}
                setWishlist={setWishlist}
                cart={cart}
                setCart={setCart}
              />
            }
          />

        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  )
}

export default App