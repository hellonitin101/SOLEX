import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Popup = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 3500)

        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    return (
        <div className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-5'>

            <div className='relative bg-white w-full max-w-2xl p-8 md:p-12 rounded-3xl text-center shadow-2xl'>

                {/* Close Button */}
                <button
                    onClick={() => setShow(false)}
                    className='absolute cursor-pointer top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#C99B60] hover:text-white transition'
                >
                    <X size={20} />
                </button>

                {/* Welcome Message */}
                <p className=' text-lg md:text-xl font-bold tracking-[3px] mb-6'>
                    Welcome To SOLE<span className='text-[#B99C60]'>X</span>
                </p>

                {/* Heading */}
                <p className='text-[#C99B60] text-sm font-semibold tracking-[4px] uppercase mb-3'>
                    Discover Your Style
                </p>

                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    Explore These Brands
                </h2>

                <p className='text-gray-500 mt-3 text-sm md:text-base'>
                    Find your favourite style from the brands you love.
                </p>

                {/* Brand Logos */}
                <div className='grid grid-cols-3 gap-3 md:gap-5 mt-10'>

                    {/* ONE8 */}
                    <div className='h-28 md:h-36 border cursor-pointer border-gray-200 rounded-2xl flex flex-col items-center justify-center hover:border-[#C99B60] hover:bg-[#C99B60]/5 transition group'>
                        <h3 className='text-2xl md:text-3xl font-black tracking-tighter text-gray-900 group-hover:text-[#C99B60]'>
                            ONE<span className='text-[#C99B60]'>8</span>
                        </h3>
                        <span className='text-[10px] tracking-[3px] text-gray-400 mt-2'>
                            COLLECTION
                        </span>
                    </div>

                    {/* AIR */}
                    <div className='h-28 md:h-36 border cursor-pointer border-gray-200 rounded-2xl flex flex-col items-center justify-center hover:border-[#C99B60] hover:bg-[#C99B60]/5 transition group'>
                        <h3 className='text-3xl md:text-4xl font-black italic tracking-tighter text-gray-900 group-hover:text-[#C99B60]'>
                            AIR
                        </h3>
                        <span className='text-[10px] tracking-[3px] text-gray-400 mt-2'>
                            STYLE
                        </span>
                    </div>

                    {/* NIKE */}
                    <div className='h-28 md:h-36 border cursor-pointer border-gray-200 rounded-2xl flex flex-col items-center justify-center hover:border-[#C99B60] hover:bg-[#C99B60]/5 transition group'>
                        <h3 className='text-2xl md:text-3xl font-black italic tracking-tighter text-gray-900 group-hover:text-[#C99B60]'>
                            NIKE
                        </h3>
                        <span className='text-[10px] tracking-[3px] text-gray-400 mt-2'>
                            JUST DO IT
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Popup