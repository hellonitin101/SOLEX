
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Footer = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        toast.success('Thanks for subscribing!')

        setEmail('')
    }

    return (
        <footer className='w-full bg-[#111111] text-white px-5 md:px-10 py-8 border-t border-[#292929]'>

            <Toaster position='top-center' />

            <div className='max-w-7xl mx-auto flex flex-col gap-8'>

                {/* Logo & Newsletter */}
                <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>

                    <h2 className='text-3xl font-bold tracking-widest text-white'>
                        SOLE <span className='text-[#C9A66B]'>X</span>
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className='flex w-full sm:w-[350px] bg-[#202020] rounded-full overflow-hidden border border-[#333333] focus-within:border-[#C9A66B] transition-all'
                    >

                        <input
                            type='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            className='w-full min-w-0 px-5 py-3 bg-transparent outline-none text-sm text-white placeholder:text-gray-500'
                        />

                        <button
                            type='submit'
                            className='bg-[#C9A66B] text-black px-6 font-semibold hover:bg-[#D8B982] transition cursor-pointer'
                        >
                            Join
                        </button>

                    </form>

                </div>

                {/* Copyright */}
                <div className='border-t border-[#292929] pt-5 text-center'>

                    <p className='text-sm text-gray-500'>
                        &copy; 2026 SOLEX. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer
