import React from 'react'

const Brand = () => {
    return (
        <div className="w-full bg-[#222222] px-5 md:px-16 py-12">

            {/* Heading */}
            <div className="mb-8">
                <p className="text-xs tracking-[3px] uppercase text-[#C9A66B] mb-2">
                    Top Collections
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Our <span className="text-[#C9A66B]">Brands</span>
                </h1>

                <p className="text-gray-400 text-sm mt-3">
                    Explore footwear from your favourite brands.
                </p>
            </div>

            {/* Brand Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

                {brandData.map((e) => (
                    <div
                        key={e.id}
                        className="bg-[#151515] border border-[#333333] rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#C9A66B] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(201,166,107,0.08)] transition-all duration-300 cursor-pointer group"
                    >

                        {/* Brand Logo */}
                        <div className="w-20 h-20 flex items-center justify-center">

                            <img
                                src={e.image}
                                alt={e.name}
                                className="w-full h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition duration-300"
                            />

                        </div>

                        {/* Brand Name */}
                        <h2 className="text-xl md:text-2xl font-semibold brand-font text-white group-hover:text-[#C9A66B] transition duration-300">
                            {e.name}
                        </h2>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Brand


const brandData = [
    {
        id: 1,
        name: 'Nike',
        image: 'https://cdn.simpleicons.org/nike/111111'
    },
    {
        id: 2,
        name: 'Adidas',
        image: 'https://cdn.simpleicons.org/adidas/111111'
    },
    {
        id: 3,
        name: 'Puma',
        image: 'https://cdn.simpleicons.org/puma/111111'
    },
    {
        id: 4,
        name: 'New Balance',
        image: 'https://cdn.simpleicons.org/newbalance/111111'
    },
    {
        id: 5,
        name: 'Reebok',
        image: 'https://cdn.simpleicons.org/reebok/111111'
    }
]