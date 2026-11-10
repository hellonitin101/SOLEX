
import React from 'react'
import productData from '../Data/ProductData'
import { Link } from 'react-router-dom'
import { Heart, IndianRupee } from 'lucide-react'

const Product = ({
    company,
    category,
    wishlist,
    setWishlist,
    cart,
    setCart,
    search
}) => {

    // Search + Company + Category Filter
    const filteredData = productData.filter((e) => {

        const searchMatch =
            e.title.toLowerCase().includes(search.toLowerCase()) ||
            e.category.toLowerCase().includes(search.toLowerCase()) ||
            e.company.toLowerCase().includes(search.toLowerCase())

        const companyMatch = company === 'All' || e.company === company

        const categoryMatch = category === 'All' || e.category === category

        return searchMatch && companyMatch && categoryMatch
    })

    // Wishlist Toggle
    const toggleWishlist = (product) => {

        setWishlist((prev) => {

            const alreadyAdded = prev.some((item) => item.id === product.id)

            if (alreadyAdded) {
                return prev.filter((item) => item.id !== product.id)
            }

            return [...prev, product]
        })
    }

    // Cart Toggle
    const toggleCart = (product) => {

        setCart((prev) => {

            const alreadyAdded = prev.some((item) => item.id === product.id)

            if (alreadyAdded) {
                return prev.filter((item) => item.id !== product.id)
            }

            return [...prev, product]
        })
    }

    return (
        <div className='w-full bg-[#222222] px-4 md:px-10 py-12'>

            {/* Heading */}
            <h2 className='text-3xl font-bold text-white mb-8'>
                Our <span className='text-[#C9A66B]'>Products</span>
            </h2>

            {/* Product Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>

                {filteredData.slice(0, 8).map((e) => (

                    <div
                        key={e.id}
                        className='bg-[#151515] border border-[#292929] rounded-2xl overflow-hidden hover:border-[#C9A66B] transition-all duration-300 group'
                    >

                        {/* Product Image */}
                        <div className='w-full h-64 bg-[#202020] overflow-hidden relative'>

                            <img
                                src={e.image}
                                alt={e.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />

                            {/* Company Badge */}
                            <span className='absolute top-4 left-4 bg-[#C9A66B] text-[#111111] text-xs font-semibold px-4 py-2 rounded-full'>
                                {e.company}
                            </span>

                            {/* Wishlist Button */}
                            <button
                                className='absolute top-3 right-4 rounded-full cursor-pointer bg-[#151515]/80 p-2 hover:bg-[#C9A66B] transition-all duration-300'
                                onClick={() => toggleWishlist(e)}
                            >
                                <Heart
                                    size={22}
                                    fill={
                                        wishlist.some((item) => item.id === e.id)
                                            ? '#FF0000'
                                            : 'none'
                                    }
                                    color={
                                        wishlist.some((item) => item.id === e.id)
                                            ? '#FF0000'
                                            : '#FFFFFF'
                                    }
                                />
                            </button>

                        </div>

                        {/* Product Details */}
                        <div className='p-5 flex flex-col gap-3'>

                            <h2 className='text-lg font-bold text-white'>
                                {e.title}
                            </h2>

                            <p className='text-sm text-gray-400 line-clamp-2'>
                                {e.description}
                            </p>

                            {/* Rating */}
                            <div className='flex items-center gap-2'>

                                <span className='text-sm font-semibold text-white'>
                                    {e.rating}.0
                                </span>

                                <div className='flex gap-1'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-lg ${star <= e.rating
                                                ? 'text-[#C9A66B]'
                                                : 'text-[#444444]'
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* Category and Price */}
                            <div className='flex justify-between items-center pt-3 border-t border-[#333333]'>

                                <span className='text-sm font-semibold text-[#C9A66B]'>
                                    {e.category}
                                </span>

                                <span className='text-sm font-semibold flex items-center text-[#C9A66B]'>
                                    <IndianRupee size={15} />
                                    {e.price}
                                </span>

                            </div>

                            {/* Add to Cart */}
                            <button
                                className='w-full py-3 mt-2 bg-[#C9A66B] text-[#111111] rounded-full font-semibold hover:bg-[#D8B982] transition-all duration-300 cursor-pointer'
                                onClick={() => toggleCart(e)}
                            >
                                {cart.some((item) => item.id === e.id)
                                    ? 'Remove from Cart'
                                    : 'Add to Cart'}
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {/* No Products Found */}
            {filteredData.length === 0 && (

                <div className='w-full py-16 flex justify-center items-center'>

                    <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-400'>
                        OOPS NO SUCH PRODUCTS !
                        <br />

                        Matching <span className='text-[#C9A66B]'>{category}</span> of{' '}
                        <span className='text-[#C9A66B]'>{company}</span>

                        <br />

                        PLEASE SELECT ANOTHER COMPANY & CATEGORY.
                    </h2>

                </div>

            )}

            {/* View All Button */}
            <div className='flex justify-center mt-12'>

                <Link
                    to='/viewall'
                    className='px-10 py-3 bg-[#C9A66B] text-black rounded-full font-semibold hover:bg-[#D8B982] hover:scale-105 transition-all duration-300'
                >
                    View All Products →
                </Link>

            </div>

        </div>
    )
}

export default Product