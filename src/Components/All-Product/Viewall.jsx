
import React from 'react'
import productData from '../Data/ProductData'
import { Link } from 'react-router-dom'
import { Heart, IndianRupee } from 'lucide-react'

const Viewall = ({ wishlist, setWishlist, cart, setCart, search }) => {

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const alreadyAdded = prev.some((item) => item.id === product.id)

            return alreadyAdded
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, product]
        })
    }

    const toggleCart = (product) => {
        setCart((prev) => {
            const alreadyAdded = prev.some((item) => item.id === product.id)

            return alreadyAdded
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, product]
        })
    }

    const filteredData = productData.filter(item => {
        return (
            item.category.toLowerCase().includes(search.toLowerCase()) ||
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.company.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
        <div className='w-full min-h-screen pt-35 bg-[#222222] px-4 md:px-10 py-10'>

            {/* Heading */}
            <div className='mb-8'>
                <p className='text-[#C9A66B] text-xs tracking-[3px] uppercase mb-2'>
                    Explore Collection
                </p>

                <h1 className='text-3xl md:text-4xl font-bold text-white'>
                    All <span className='text-[#C9A66B]'>Products</span>
                </h1>

                <p className='text-gray-400 text-sm mt-3'>
                    Discover your favourite footwear collection.
                </p>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                {filteredData.length > 0 ? (

                    filteredData.map((e) => (

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

                    ))

                ) : (

                    <div className='col-span-full text-center py-20'>
                        <h2 className='text-2xl font-semibold text-white'>
                            No Products Found
                        </h2>

                        <p className='text-gray-400 mt-3'>
                            Try searching with another product name.
                        </p>
                    </div>

                )}

            </div>

            {/* Show Less */}
            <div className='flex justify-center mt-12'>

                <Link
                    to='/'
                    className='inline-block px-10 py-3 bg-[#C9A66B] text-[#111111] rounded-full font-semibold hover:bg-[#D8B982] hover:shadow-lg transition-all duration-300'
                >
                    Show Less →
                </Link>

            </div>

        </div>
    )
}

export default Viewall
