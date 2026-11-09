import React from 'react'
import productData from '../Data/ProductData'
import { Link } from 'react-router-dom'
import { Heart, IndianRupee } from 'lucide-react'

const Viewall = ({ wishlist, setWishlist, cart, setCart }) => {

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

    return (
        <div className='w-full px-4 md:px-10 py-10'>

            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
                All <span className='text-[#C99B60]'>Products</span>
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>

                {productData.map((e) => (

                    <div
                        key={e.id}
                        className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group'
                    >

                        <div className='w-full h-64 bg-gray-100 overflow-hidden relative'>

                            <img
                                src={e.image}
                                alt={e.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />

                            <span className='absolute top-4 left-4 bg-[#E1B77F] text-white text-xs px-4 py-2 rounded-full'>
                                {e.company}
                            </span>

                            <button
                                className='absolute top-3 right-4 rounded-full text-[#E1B77F] cursor-pointer'
                                onClick={() => toggleWishlist(e)}
                            >
                                <Heart
                                    size={50}
                                    fill={
                                        wishlist.some((item) => item.id === e.id)
                                            ? '#E1B77F'
                                            : '#fff'
                                    }
                                />
                            </button>

                        </div>

                        <div className='p-5 flex flex-col gap-3'>

                            <h2 className='text-lg font-bold text-gray-900'>
                                {e.title}
                            </h2>

                            <p className='text-sm text-gray-500 line-clamp-2'>
                                {e.description}
                            </p>

                            <div className='flex items-center gap-2'>
                                <span className='text-sm font-semibold text-gray-700'>
                                    {e.rating}.0
                                </span>

                                <div className='flex gap-1'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-lg ${star <= e.rating
                                                ? 'text-[#E1B77F]'
                                                : 'text-gray-300'
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='flex justify-between items-center pt-3 border-t border-gray-100'>

                                <span className='text-sm font-semibold text-[#C99B60]'>
                                    {e.category}
                                </span>

                                <span className='text-sm font-semibold flex items-center text-[#C99B60]'>
                                    <IndianRupee size={15} /> {e.price}
                                </span>

                            </div>

                            <button
                                className='w-full py-3 mt-2 bg-[#E1B77F] text-white rounded-full font-semibold hover:bg-[#C99B60] transition-all duration-300 cursor-pointer'
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

            <div className='flex justify-center mt-12'>
                <Link
                    to='/'
                    className='inline-block px-10 py-3 bg-[#E1B77F] text-white rounded-full font-semibold hover:bg-[#C99B60] hover:shadow-lg transition-all duration-300'
                >
                    Show Less →
                </Link>
            </div>

        </div>
    )
}

export default Viewall