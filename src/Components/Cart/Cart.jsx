
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { IndianRupee, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react'

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
        <div className='w-full min-h-screen bg-gray-50 px-5 md:px-10 py-10'>

            <h2 className='text-3xl font-bold mb-10 text-center text-gray-900'>
                My Shopping Cart
            </h2>

            {/* Cart Products */}
            <div className='flex flex-col items-center gap-5'>

                {cart.map((e) => (
                    <div
                        key={e.id}
                        className='w-full md:w-1/2 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col sm:flex-row gap-5 relative'
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

                            <span className='text-sm font-semibold text-[#C99B60]'>
                                {e.category}
                            </span>

                            <span className='text-lg font-bold flex items-center text-[#C99B60]'>
                                <IndianRupee size={18} />
                                {e.price}
                            </span>

                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeCart(e.id)}
                            className='absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer'
                        >
                            <Trash2 size={22} />
                        </button>

                        <button
                            onClick={plusMessage}
                            className='absolute bottom-4 right-4 p-2 rounded-full bg-gray-100 text-[#C99B60] hover:bg-[#C99B60] hover:text-white transition-all cursor-pointer'
                        >
                            <Plus size={22} />
                        </button>

                        <button
                            onClick={minusMessage}
                            className='absolute bottom-4 right-20 p-2 rounded-full bg-gray-100 text-[#C99B60] hover:bg-[#C99B60] hover:text-white transition-all cursor-pointer'
                        >
                            <Minus size={22} />
                        </button>


                    </div>
                ))}

            </div>

            {/* Empty Cart */}
            {cart.length === 0 && (
                <div className='flex flex-col items-center justify-center py-16 gap-4'>

                    <ShoppingBag size={60} className='text-gray-300' />

                    <h2 className='text-2xl font-bold text-gray-500'>
                        YOUR CART IS EMPTY!
                    </h2>

                    <p className='text-gray-400'>
                        Add some products to your cart.
                    </p>

                </div>
            )}

            {/* Price Details */}
            {cart.length > 0 && (
                <div className='w-full md:w-1/2 mx-auto mt-10 bg-white rounded-2xl shadow-sm p-6'>

                    <h2 className='text-xl font-bold text-gray-900 mb-6'>
                        Price Details
                    </h2>

                    <div className='flex justify-between mb-4 text-gray-600'>
                        <span>Total Products</span>
                        <span className='font-semibold'>{cart.length}</span>
                    </div>

                    <div className='flex justify-between mb-4 text-gray-600'>
                        <span>Subtotal</span>

                        <span className='flex items-center'>
                            <IndianRupee size={15} />
                            {price}
                        </span>
                    </div>

                    <div className='flex justify-between mb-4 text-gray-600'>
                        <span>Shipping Fee</span>

                        <span className={`font-semibold ${shippingFee === 0 ? 'text-green-600' : ''}`}>
                            {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                        </span>
                    </div>

                    <div className='border-t pt-5 flex justify-between items-center'>

                        <span className='text-lg font-bold text-gray-900'>
                            Total Price
                        </span>

                        <span className='text-xl font-bold text-[#C99B60] flex items-center'>
                            <IndianRupee size={20} />
                            {totalPrice}
                        </span>

                    </div>

                    <button
                        onClick={() => setShowReceipt(true)}
                        className='w-full mt-6 py-3 rounded-full bg-[#E1B77F] text-white font-semibold hover:bg-[#C99B60] transition-all cursor-pointer'
                    >
                        CheckOut
                    </button>

                </div>
            )}

            {/* Receipt */}
            {showReceipt && cart.length > 0 && (
                <div className='w-full md:w-1/2 mx-auto mt-8 bg-white border-2 border-dashed border-[#C99B60] rounded-2xl p-6 shadow-md'>

                    <div className='text-center border-b pb-5 mb-5'>

                        <h1 className='text-3xl font-bold text-gray-900'>
                            SOLE<span className='text-[#C99B60]'>X</span>
                        </h1>

                        <p className='text-sm text-gray-500 mt-2'>
                            Shopping Receipt
                        </p>

                    </div>

                    {/* Receipt Products */}
                    <div className='space-y-4'>

                        {cart.map((e) => (
                            <div key={e.id} className='flex justify-between gap-3 text-gray-600'>

                                <span>{e.title}</span>

                                <span className='flex items-center font-medium'>
                                    <IndianRupee size={14} />
                                    {e.price}
                                </span>

                            </div>
                        ))}

                        <div className='border-t pt-4 space-y-3'>

                            <div className='flex justify-between text-gray-600'>
                                <span>Subtotal</span>
                                <span>₹{price}</span>
                            </div>

                            <div className='flex justify-between text-gray-600'>
                                <span>Shipping</span>
                                <span>
                                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                                </span>
                            </div>

                            <div className='flex justify-between text-lg font-bold text-gray-900 border-t pt-4'>
                                <span>Total</span>
                                <span className='text-[#C99B60]'>
                                    ₹{totalPrice}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Authorized Signature */}
                    <div className='mt-10 pt-5 border-t border-dashed text-right'>

                        <p className='text-sm text-gray-500'>
                            Authorized Signature
                        </p>

                        <p
                            className='text-3xl font-bold text-gray-800 mt-2'
                            style={{ fontFamily: 'Dancing Script, cursive' }}
                        >
                            Nitin Singh
                        </p>

                    </div>

                    <p className='text-center text-sm text-gray-400 mt-8'>
                        Thank you for shopping with SOLEX!
                    </p>

                </div>
            )}

        </div>
    )
}

export default Cart
