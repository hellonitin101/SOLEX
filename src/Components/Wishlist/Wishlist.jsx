
import React from 'react'
import { Heart, IndianRupee } from 'lucide-react'

const Wishlist = ({ wishlist, setWishlist }) => {
    return (
        <div className='w-full min-h-screen bg-[#222222] px-5 md:px-10 py-12 text-white'>

            {/* Heading */}
            <div className='text-center mb-10'>
                <p className='text-[#C9A66B] text-xs uppercase tracking-[4px] mb-3'>
                    Your Favourite Collection
                </p>

                <h2 className='text-3xl md:text-4xl font-bold'>
                    My <span className='text-[#C9A66B]'>Wishlist</span>
                </h2>

                <div className='w-16 h-[2px] bg-[#C9A66B] mx-auto mt-5'></div>
            </div>

            {/* Cards Center */}
            <div className='flex flex-col items-center gap-5 max-w-4xl mx-auto'>

                {wishlist.map((e) => (
                    <div
                        key={e.id}
                        className='w-full bg-[#151515] border border-[#333333] hover:border-[#C9A66B]/50 rounded-xl p-4 flex flex-col sm:flex-row gap-5 relative transition-all duration-300'
                    >

                        {/* Product Image */}
                        <div className='w-full sm:w-44 h-48 sm:h-44 shrink-0 overflow-hidden rounded-lg bg-[#202020]'>
                            <img
                                src={e.image}
                                alt={e.title}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Product Details */}
                        <div className='flex flex-col flex-1 justify-center gap-3 pr-12'>

                            <h2 className='text-xl font-bold text-white'>
                                {e.title}
                            </h2>

                            <p className='text-sm text-gray-400'>
                                {e.description}
                            </p>

                            {/* Rating */}
                            <div className='flex items-center gap-2'>
                                <span className='text-sm font-semibold text-gray-300'>
                                    {e.rating}.0
                                </span>

                                <div className='flex gap-1'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text - lg ${star <= e.rating
                                                ? 'text-[#C9A66B]'
                                                : 'text-gray-600'
                                                } `}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Category & Price */}
                            <div className='flex flex-wrap items-center gap-5'>

                                <span className='text-sm font-semibold text-[#C9A66B]'>
                                    {e.category}
                                </span>

                                <span className='text-sm font-semibold flex items-center text-[#C9A66B]'>
                                    <IndianRupee size={15} />
                                    {e.price}
                                </span>

                            </div>
                        </div>

                        {/* Wishlist Heart */}
                        <button
                            className='absolute top-4 right-4 p-2 rounded-lg cursor-pointer bg-[#252525] text-red-500 hover:bg-red-500/10 transition-all duration-300'
                            onClick={() =>
                                setWishlist(wishlist.filter((item) => item.id !== e.id))
                            }
                        >
                            <Heart size={24} fill='#EF4444' />
                        </button>

                    </div>
                ))}

            </div>

            {/* Empty Wishlist */}
            {wishlist.length === 0 && (
                <div className='flex flex-col items-center justify-center py-16'>
                    <Heart size={55} className='text-[#C9A66B] mb-5' />

                    <h2 className='text-xl md:text-2xl font-bold text-white'>
                        YOUR WISHLIST IS EMPTY!
                    </h2>

                    <p className='text-sm text-gray-400 mt-2'>
                        You haven't added any products to your wishlist yet.
                    </p>
                </div>
            )}

        </div>
    )
}

export default Wishlist
