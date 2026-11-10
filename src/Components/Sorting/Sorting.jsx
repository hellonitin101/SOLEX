
import React from 'react'

const Sorting = ({ company, setCompany, category, setCategory }) => {

    return (
        <div className='w-full bg-[#222222] px-4 md:px-10 py-12'>

            {/* Heading */}
            <div className='text-center mb-10'>
                <p className='text-[#C9A66B] text-xs md:text-sm uppercase tracking-[4px] mb-3'>
                    Find Your Perfect Style
                </p>

                <h1 className='text-3xl md:text-4xl font-bold text-white'>
                    Explore Our <span className='text-[#C9A66B]'>Collection</span>
                </h1>

                <div className='w-16 h-[2px] bg-[#C9A66B] mx-auto mt-5'></div>
            </div>

            <div className='max-w-5xl mx-auto flex flex-col gap-6'>

                {/* Company Filter */}
                <div className='bg-[#151515] border border-[#333333] rounded-xl p-5 md:p-7'>

                    <div className='text-center mb-6'>
                        <h2 className='text-white text-lg font-semibold'>
                            Shop By <span className='text-[#C9A66B]'>Brand</span>
                        </h2>

                        <p className='text-gray-500 text-xs mt-1'>
                            Choose your favourite brand
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center gap-3'>
                        {companyData.map((e) => (
                            <button
                                key={e.id}
                                onClick={() => setCompany(e.name)}
                                className={`min-w-[90px] px-6 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300
                                ${company === e.name
                                        ? 'bg-[#C9A66B] text-black shadow-lg shadow-[#C9A66B]/20'
                                        : 'bg-[#222222] border border-[#333333] text-gray-300 hover:border-[#C9A66B] hover:text-[#C9A66B]'
                                    }`}
                            >
                                {e.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className='bg-[#151515] border border-[#333333] rounded-xl p-5 md:p-7'>

                    <div className='text-center mb-6'>
                        <h2 className='text-white text-lg font-semibold'>
                            Shop By <span className='text-[#C9A66B]'>Category</span>
                        </h2>

                        <p className='text-gray-500 text-xs mt-1'>
                            Explore different footwear styles
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center gap-3'>
                        {categoryData.map((e) => (
                            <button
                                key={e.category}
                                onClick={() => setCategory(e.category)}
                                className={`min-w-[100px] px-6 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300
                                ${category === e.category
                                        ? 'bg-[#C9A66B] text-black shadow-lg shadow-[#C9A66B]/20'
                                        : 'bg-[#222222] border border-[#333333] text-gray-300 hover:border-[#C9A66B] hover:text-[#C9A66B]'
                                    }`}
                            >
                                {e.category}
                            </button>
                        ))}
                    </div>
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
