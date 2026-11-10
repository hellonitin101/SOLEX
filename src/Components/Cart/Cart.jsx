
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {
    IndianRupee,
    Trash2,
    ShoppingBag,
    Plus,
    Minus
} from 'lucide-react'

const Cart = ({ cart, setCart }) => {

    const [showReceipt, setShowReceipt] = useState(false)

    // Remove Product
    const removeCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
        setShowReceipt(false)
    }

    // Calculate Price
    const price = cart.reduce((total, e) => {
        return total + Number(e.price)
    }, 0)

    // Shipping Fee
    const shippingFee = price > 2000 ? 0 : 100

    // Final Price
    const totalPrice = price + (cart.length > 0 ? shippingFee : 0)

    // Message
    const plusMessage = () => {
        toast.error("Sorry You Can't add two products at one time")
    }

    const minusMessage = () => {
        toast.error("Sorry You Can't decrease the product")
    }

    return (
        <div className='w-full min-h-screen bg-[#222222] text-white px-5 md:px-10 py-10'>

            {/* Heading */}
            <h2 className='text-3xl font-bold mb-10 text-center text-white'>
                My Shopping <span className='text-[#C9A66B]'>Cart</span>
            </h2>

            {/* Cart Products */}
            <div className='flex flex-col items-center gap-5'>

                {cart.map((e) => (
                    <div
                        key={e.id}
                        className='w-full md:w-1/2 bg-[#151515] border border-[#292929] rounded-2xl hover:border-[#C9A66B]/50 transition-all p-4 flex flex-col sm:flex-row gap-5 relative'
                    >

                        {/* Product Image */}
                        <div className='w-full sm:w-44 h-44 shrink-0 overflow-hidden rounded-xl bg-[#202020]'>
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

                            <span className='text-sm font-semibold text-[#C9A66B]'>
                                {e.category}
                            </span>

                            <span className='text-lg font-bold flex items-center text-[#C9A66B]'>
                                <IndianRupee size={18} />
                                {e.price}
                            </span>

                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeCart(e.id)}
                            className='absolute top-4 right-4 p-2 rounded-full bg-[#252525] text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer'
                        >
                            <Trash2 size={22} />
                        </button>

                        {/* Plus Button */}
                        <button
                            onClick={plusMessage}
                            className='absolute bottom-4 right-4 p-2 rounded-full bg-[#252525] text-[#C9A66B] hover:bg-[#C9A66B] hover:text-black transition-all cursor-pointer'
                        >
                            <Plus size={22} />
                        </button>

                        {/* Minus Button */}
                        <button
                            onClick={minusMessage}
                            className='absolute bottom-4 right-20 p-2 rounded-full bg-[#252525] text-[#C9A66B] hover:bg-[#C9A66B] hover:text-black transition-all cursor-pointer'
                        >
                            <Minus size={22} />
                        </button>

                    </div>
                ))}

            </div>

            {/* Empty Cart */}
            {cart.length === 0 && (
                <div className='flex flex-col items-center justify-center py-16 gap-4'>

                    <ShoppingBag size={60} className='text-[#C9A66B]' />

                    <h2 className='text-2xl font-bold text-white'>
                        YOUR CART IS EMPTY!
                    </h2>

                    <p className='text-gray-400'>
                        Add some products to your cart.
                    </p>

                </div>
            )}

            {/* Price Details */}
            {cart.length > 0 && (
                <div className='w-full md:w-1/2 mx-auto mt-10 bg-[#151515] border border-[#292929] rounded-2xl p-6'>

                    <h2 className='text-xl font-bold text-white mb-6'>
                        Price Details
                    </h2>

                    <div className='flex justify-between mb-4 text-gray-400'>
                        <span>Total Products</span>
                        <span className='font-semibold text-white'>{cart.length}</span>
                    </div>

                    <div className='flex justify-between mb-4 text-gray-400'>
                        <span>Subtotal</span>

                        <span className='flex items-center text-white'>
                            <IndianRupee size={15} />
                            {price}
                        </span>
                    </div>

                    <div className='flex justify-between mb-4 text-gray-400'>
                        <span>Shipping Fee</span>

                        <span className={`font - semibold ${shippingFee === 0 ? 'text-green-500' : 'text-white'} `}>
                            {shippingFee === 0 ? 'FREE' : `₹${shippingFee} `}
                        </span>
                    </div>

                    <div className='border-t border-[#333333] pt-5 flex justify-between items-center'>

                        <span className='text-lg font-bold text-white'>
                            Total Price
                        </span>

                        <span className='text-xl font-bold text-[#C9A66B] flex items-center'>
                            <IndianRupee size={20} />
                            {totalPrice}
                        </span>

                    </div>

                    <button
                        onClick={() => setShowReceipt(true)}
                        className='w-full mt-6 py-3 rounded-full bg-[#C9A66B] text-black font-semibold hover:bg-[#D8B982] transition-all cursor-pointer'
                    >
                        CheckOut
                    </button>

                </div>
            )}

            {/* Receipt */}
            {showReceipt && cart.length > 0 && (
                <div className='w-full md:w-1/2 mx-auto mt-8 bg-[#151515] border-2 border-dashed border-[#C9A66B] rounded-2xl p-6'>

                    <div className='text-center border-b border-[#333333] pb-5 mb-5'>

                        <h1 className='text-3xl font-bold text-white'>
                            SOLE<span className='text-[#C9A66B]'>X</span>
                        </h1>

                        <p className='text-sm text-gray-400 mt-2'>
                            Shopping Receipt
                        </p>

                    </div>

                    {/* Receipt Products */}
                    <div className='space-y-4'>

                        {cart.map((e) => (
                            <div key={e.id} className='flex justify-between gap-3 text-gray-300'>

                                <span>{e.title}</span>

                                <span className='flex items-center font-medium text-white'>
                                    <IndianRupee size={14} />
                                    {e.price}
                                </span>

                            </div>
                        ))}

                        <div className='border-t border-[#333333] pt-4 space-y-3'>

                            <div className='flex justify-between text-gray-400'>
                                <span>Subtotal</span>
                                <span>₹{price}</span>
                            </div>

                            <div className='flex justify-between text-gray-400'>
                                <span>Shipping</span>
                                <span>
                                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee} `}
                                </span>
                            </div>

                            <div className='flex justify-between text-lg font-bold text-white border-t border-[#333333] pt-4'>
                                <span>Total</span>
                                <span className='text-[#C9A66B]'>
                                    ₹{totalPrice}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Authorized Signature */}
                    <div className='mt-10 pt-5 border-t border-dashed border-[#444444] text-right'>

                        <p className='text-sm text-gray-400'>
                            Authorized Signature
                        </p>

                        <p
                            className='text-3xl font-bold text-[#C9A66B] mt-2'
                            style={{ fontFamily: 'Dancing Script, cursive' }}
                        >
                            Nitin Singh
                        </p>

                    </div>

                    <p className='text-center text-sm text-gray-500 mt-8'>
                        Thank you for shopping with SOLEX!
                    </p>

                </div>
            )}

        </div>
    )
}

export default Cart
