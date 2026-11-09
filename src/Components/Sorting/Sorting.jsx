import React from 'react'

const Sorting = ({ company, setCompany, category, setCategory }) => {

    return (
        <div className='w-full py-10 px-4 flex flex-col items-center gap-8'>

            {/* Heading */}
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    Our <span className='text-[#E1B77F]'>Products</span>
                </h1>
            </div>

            {/* Company Filter */}
            <div className='w-full flex flex-col items-center gap-4'>

                <h2 className='text-sm font-semibold uppercase tracking-widest text-gray-500'>
                    Shop By Brand
                </h2>

                <div className='flex flex-wrap justify-center gap-3'>
                    {companyData.map((e) => (
                        <button
                            key={e.id}
                            onClick={() => setCompany(e.name)}
                            className={`px-6 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-all duration-300
                            ${company === e.name
                                    ? 'bg-[#E1B77F] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:text-[#E1B77F]'
                                }`}
                        >
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Category Filter */}
            <div className='w-full flex flex-col items-center gap-4'>

                <h2 className='text-sm font-semibold uppercase tracking-widest text-gray-500'>
                    Shop By Category
                </h2>

                <div className='flex flex-wrap justify-center gap-3'>
                    {categoryData.map((e) => (
                        <button
                            key={e.category}
                            onClick={() => setCategory(e.category)}
                            className={`px-6 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-all duration-300
                            ${category === e.category
                                    ? 'bg-[#E1B77F] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:text-[#E1B77F]'
                                }`}
                        >
                            {e.category}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Sorting

const companyData = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Nike' },
    { id: 3, name: 'Adidas' },
    { id: 4, name: 'One-8' },
    { id: 5, name: 'Air' },
]

const categoryData = [
    { category: 'All' },
    { category: 'Sneaker' },
    { category: 'Loffer' },
    { category: 'Heal' },
    { category: 'Slepper' },
]