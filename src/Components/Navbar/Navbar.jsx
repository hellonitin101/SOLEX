import { Heart, ShoppingBag, Menu, X, IndianRupee, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ wishlist, cart, search, setSearch }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div className="fixed top-0 left-0 w-full z-50">

            {/* Top Announcement Bar */}
            <div className="bg-[#080808] text-[#B99C60] flex items-center justify-center gap-1 py-2 text-center text-xs md:text-sm px-2">
                <p>Free Shipping on Order above</p>
                <IndianRupee size={14} />
                <p>2000 | Easy 30-Days Return</p>
            </div>

            {/* Navbar */}
            <nav className="bg-white shadow-md px-5 md:px-10 lg:px-16 py-4">

                <div className="flex items-center justify-between gap-4">

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="text-3xl font-bold uppercase tracking-wider text-black"
                        >
                            sole<span className="text-[#B99C60]">x</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10">

                        <Link to="/" className="text-gray-700 font-medium hover:text-[#B99C60] transition">
                            Home
                        </Link>

                        <Link to="/viewall" className="text-gray-700 font-medium hover:text-[#B99C60] transition">
                            Products
                        </Link>

                        <Link to="/about" className="text-gray-700 font-medium hover:text-[#B99C60] transition">
                            About Us
                        </Link>

                        <Link to="/contact" className="text-gray-700 font-medium hover:text-[#B99C60] transition">
                            Contact Us
                        </Link>

                    </div>

                    {/* Right Section */}
                    <div className="flex items-center justify-end gap-3 md:gap-5">

                        {/* Search */}
                        <div className="flex items-center gap-2 bg-[#F8F7F4] border border-gray-200 rounded-full px-3 md:px-4 py-2 focus-within:border-[#B99C60] transition">

                            <Search size={17} className="text-gray-500 shrink-0" />

                            <input
                                type="text"
                                placeholder="Search Product"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-24 sm:w-28 md:w-36 lg:w-40 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                            />

                        </div>

                        {/* Wishlist - Desktop Only */}
                        <Link
                            to="/wishlist"
                            className="relative group hidden md:flex items-center"
                        >
                            <Heart
                                size={22}
                                className="text-gray-800 group-hover:text-[#B99C60] transition"
                            />

                            <span className="absolute -top-2 -right-2 bg-[#B99C60] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {wishlist.length}
                            </span>
                        </Link>

                        {/* Cart - Desktop Only */}
                        <Link
                            to="/cart"
                            className="relative group hidden md:flex items-center"
                        >
                            <ShoppingBag
                                size={22}
                                className="text-gray-800 group-hover:text-[#B99C60] transition"
                            />

                            <span className="absolute -top-2 -right-2 bg-[#B99C60] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-gray-800 hover:text-[#B99C60] transition"
                        >
                            {menuOpen ? <X size={25} /> : <Menu size={25} />}
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-5 pt-6 pb-3 border-t border-gray-100 mt-5">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="text-gray-700 font-medium hover:text-[#B99C60] transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/viewall"
                            onClick={closeMenu}
                            className="text-gray-700 font-medium hover:text-[#B99C60] transition"
                        >
                            Products
                        </Link>

                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="text-gray-700 font-medium hover:text-[#B99C60] transition"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="text-gray-700 font-medium hover:text-[#B99C60] transition"
                        >
                            Contact Us
                        </Link>

                        {/* Mobile Wishlist */}
                        <Link
                            to="/wishlist"
                            onClick={closeMenu}
                            className="flex items-center justify-between text-gray-700 font-medium hover:text-[#B99C60] transition"
                        >
                            <span className="flex items-center gap-3">
                                <Heart size={20} />
                                Wishlist
                            </span>

                            <span className="bg-[#B99C60] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                                {wishlist.length}
                            </span>
                        </Link>

                        {/* Mobile Cart */}
                        <Link
                            to="/cart"
                            onClick={closeMenu}
                            className="flex items-center justify-between text-gray-700 font-medium hover:text-[#B99C60] transition"
                        >
                            <span className="flex items-center gap-3">
                                <ShoppingBag size={20} />
                                Cart
                            </span>

                            <span className="bg-[#B99C60] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        </Link>

                    </div>
                )}

            </nav>

        </div>
    )
}

export default Navbar