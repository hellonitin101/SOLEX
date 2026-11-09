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
    setCart
}) => {

    const filteredData = productData.filter((e) => {
        const companyMatch = company === 'All' || e.company === company
        const categoryMatch = category === 'All' || e.category === category

        return companyMatch && categoryMatch
    })

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const alreadyAdded = prev.some((item) => item.id === product.id)

            if (alreadyAdded) {
                return prev.filter((item) => item.id !== product.id)
            }

            return [...prev, product]
        })
    }

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
        <div className='w-full px-4 md:px-10 py-12'>

            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Our Products
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>

                {filteredData.slice(0, 8).map((e) => (

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
                                className='absolute top-3 right-4 rounded-full text-[#FF0000] cursor-pointer'
                                onClick={() => toggleWishlist(e)}
                            >
                                <Heart
                                    size={30}
                                    fill={
                                        wishlist.some((item) => item.id === e.id)
                                            ? '#FF0000'
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

            {filteredData.length === 0 && (
                <div className='w-full py-16 flex justify-center items-center'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-500'>
                        OOPS NO SUCH PRODUCTS !
                        <br />
                        Matching <span className='text-[#E1B77F]'>{category}</span> of{' '}
                        <span className='text-[#E1B77F]'>{company}</span>
                        <br />
                        PLEASE SELECT ANOTHER COMPANY & CATEGORY.
                    </h2>
                </div>
            )}

            <div className='flex justify-center mt-12'>
                <Link
                    to='/viewall'
                    className='px-10 py-3 bg-[#E1B77F] text-white rounded-full font-semibold hover:bg-[#C99B60] transition-all duration-300'
                >
                    View All Products →
                </Link>
            </div>

        </div>
    )
}

export default Product