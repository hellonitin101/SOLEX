
import React from 'react'

const Brand = () => {
    return (
        <div className="px-5 md:px-16 py-12">

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-8">
                Our <span className="text-[#DAB77F]">Brands</span>
            </h1>

            {/* Brand Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

                {brandData.map((e) => (
                    <div
                        key={e.id}
                        className="bg-white border rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
                    >

                        <div className="w-20 h-20 flex items-center justify-cente">
                            <img
                                src={e.image}
                                alt={e.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold brand-font text-gray-800 ">
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
