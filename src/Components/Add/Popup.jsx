
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
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-5'>

            <div className='relative bg-[#151515] border border-[#333333] text-white w-full max-w-2xl p-8 md:p-12 rounded-3xl text-center shadow-2xl'>

                {/* Close Button */}
                <button
                    onClick={() => setShow(false)}
                    className='absolute cursor-pointer top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#252525] text-gray-300 hover:bg-[#C9A66B] hover:text-black transition duration-300'
                >
                    <X size={20} />
                </button>

                {/* Welcome Message */}
                <p className='text-lg md:text-xl font-bold tracking-[3px] mb-6'>
                    Welcome To SOLE
                    <span className='text-[#C9A66B]'>X</span>
                </p>

                {/* Heading */}
                <p className='text-[#C9A66B] text-sm font-semibold tracking-[4px] uppercase mb-3'>
                    Discover Your Style
                </p>

                <h2 className='text-3xl md:text-4xl font-bold text-white'>
                    Explore These Brands
                </h2>

                <p className='text-gray-400 mt-3 text-sm md:text-base'>
                    Find your favourite style from the brands you love.
                </p>

                {/* Brand Logos */}
                <div className='grid grid-cols-3 gap-3 md:gap-5 mt-10'>

                    {/* ONE8 */}
                    <div className='h-28 md:h-36 border cursor-pointer border-[#333333] bg-[#202020] rounded-2xl flex flex-col items-center justify-center hover:border-[#C9A66B] hover:bg-[#C9A66B]/10 transition duration-300 group'>

                        <h3 className='text-2xl md:text-3xl font-black tracking-tighter text-white group-hover:text-[#C9A66B] transition'>
                            ONE<span className='text-[#C9A66B]'>8</span>
                        </h3>

                        <span className='text-[10px] tracking-[3px] text-gray-500 mt-2'>
                            COLLECTION
                        </span>

                    </div>

                    {/* AIR */}
                    <div className='h-28 md:h-36 border cursor-pointer border-[#333333] bg-[#202020] rounded-2xl flex flex-col items-center justify-center hover:border-[#C9A66B] hover:bg-[#C9A66B]/10 transition duration-300 group'>

                        <h3 className='text-3xl md:text-4xl font-black italic tracking-tighter text-white group-hover:text-[#C9A66B] transition'>
                            AIR
                        </h3>

                        <span className='text-[10px] tracking-[3px] text-gray-500 mt-2'>
                            STYLE
                        </span>

                    </div>

                    {/* NIKE */}
                    <div className='h-28 md:h-36 border cursor-pointer border-[#333333] bg-[#202020] rounded-2xl flex flex-col items-center justify-center hover:border-[#C9A66B] hover:bg-[#C9A66B]/10 transition duration-300 group'>

                        <h3 className='text-2xl md:text-3xl font-black italic tracking-tighter text-white group-hover:text-[#C9A66B] transition'>
                            NIKE
                        </h3>

                        <span className='text-[10px] tracking-[3px] text-gray-500 mt-2'>
                            JUST DO IT
                        </span>

                    </div>

                </div>

                {/* Bottom Branding */}
                <div className='mt-8 pt-5 border-t border-[#333333]'>
                    <p className='text-xs tracking-[3px] text-gray-500'>
                        STEP INTO YOUR STYLE
                        <span className='text-[#C9A66B]'>.</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Popup
