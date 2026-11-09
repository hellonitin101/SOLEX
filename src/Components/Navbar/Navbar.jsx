import { Heart, ShoppingBag, Menu, X, IndianRupee } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ wishlist, cart }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='fixed top-0 left-0 w-full z-50'>

            <div className="bg-[#070908] text-[#DAB77F] flex items-center justify-center py-2 text-center text-xs md:text-sm">
                <p> Free Shipping on Order above </p> <IndianRupee size={15} /> <p>2000 | Easy 30-Days Return</p>
            </div>

            <nav className="bg-white shadow-md px-5 md:px-16 py-5">

                <div className="flex items-center justify-between">

                    <div className="flex-1">
                        <Link to="/" className="text-3xl font-bold uppercase tracking-wider text-black">
                            sole<span className="text-[#DAB77F]">x</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center items-center gap-10">

                        <Link to="/" className="text-gray-700 font-medium hover:text-[#C49A5A] transition">
                            Home
                        </Link>

                        <Link to="/viewall" className="text-gray-700 font-medium hover:text-[#C49A5A] transition">
                            Products
                        </Link>

                    </div>

                    <div className="flex-1 flex justify-end items-center gap-6">

                        {/* Wishlist */}
                        <Link to="/wishlist" className="relative group">
                            <Heart size={23} className="text-gray-800 group-hover:text-[#C49A5A]" />

                            <span className="absolute -top-2 -right-2 bg-[#DAB77F] text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {wishlist.length}
                            </span>
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="relative group">
                            <ShoppingBag size={23} className="text-gray-800 group-hover:text-[#C49A5A]" />

                            <span className="absolute -top-2 -right-2 bg-[#DAB77F] text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        </Link>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-gray-800"
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>

                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-5 pt-6 pb-2 border-t mt-5">

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 font-medium hover:text-[#C49A5A]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/viewall"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 font-medium hover:text-[#C49A5A]"
                        >
                            Products
                        </Link>

                    </div>
                )}

            </nav>
        </div>
    )
}

export default Navbar