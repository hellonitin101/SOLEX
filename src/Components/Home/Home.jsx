import React from 'react'
import Hero from '../Hero/Hero'
import Brand from '../Brand/Brand'
import Product from '../Product/Product'
import Sorting from '../Sorting/Sorting'
import Contact from '../Contact/Contact'
import Features from '../Feature/Features'


const Home = ({
    company,
    setCompany,
    category,
    setCategory,
    wishlist,
    setWishlist,
    cart,
    setCart
}) => {

    return (
        <div className='bg-[#F8F7F4]'>
            <Hero />
            <Brand />

            <Sorting
                company={company}
                setCompany={setCompany}
                category={category}
                setCategory={setCategory}
            />

            <Product
                company={company}
                category={category}
                wishlist={wishlist}
                setWishlist={setWishlist}
                cart={cart}
                setCart={setCart}
            />

            <Features />

            <Contact />
        </div>
    )
}

export default Home