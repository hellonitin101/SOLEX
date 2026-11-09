import React from 'react'
import { Heart, IndianRupee } from 'lucide-react'

const Wishlist = ({ wishlist, setWishlist }) => {
    return (
        <div className='w-full min-h-screen px-5 py-10'>

            <h2 className='text-3xl font-bold mb-8 text-center'>
                My Wishlist
            </h2>

            {/* Cards Center */}
            <div className='flex flex-col items-center gap-5'>

                {wishlist.map((e) => (
                    <div
                        key={e.id}
                        className='w-full md:w-1/2 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col sm:flex-row gap-5 relative'
                    >

                        {/* Product Image */}
                        <div className='w-full sm:w-44 h-44 shrink-0 overflow-hidden rounded-xl bg-gray-100'>
                            <img
                                src={e.image}
                                alt={e.title}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Product Details */}
                        <div className='flex flex-col flex-1 justify-center gap-3 pr-12'>

                            <h2 className='text-xl font-bold text-gray-900'>
                                {e.title}
                            </h2>

                            <p className='text-sm text-gray-500'>
                                {e.description}
                            </p>

                            {/* Rating */}
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

                            {/* Category & Price */}
                            <div className='flex flex-wrap items-center gap-5'>

                                <span className='text-sm font-semibold text-[#C99B60]'>
                                    {e.category}
                                </span>

                                <span className='text-sm font-semibold flex items-center text-[#C99B60]'>
                                    <IndianRupee size={15} />
                                    {e.price}
                                </span>

                            </div>
                        </div>

                        {/* Wishlist Heart */}
                        <button
                            className='absolute top-4 right-4 p-2 rounded-full cursor-pointer text-white transition-all'
                            onClick={() =>
                                setWishlist(wishlist.filter((item) => item.id !== e.id))
                            }
                        >
                            <Heart size={50} fill='#E1B77F' />
                        </button>

                    </div>
                ))}

            </div>

            {/* Empty Wishlist */}
            {wishlist.length === 0 && (
                <h2 className='text-center text-2xl font-bold text-gray-500 py-16'>
                    YOUR WISHLIST IS EMPTY!
                </h2>
            )}

        </div>
    )
}

export default Wishlist