
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
        <footer className='w-full bg-[#080808] text-white px-5 md:px-10 py-8'>

            <Toaster position='top-center' />

            <div className='max-w-7xl mx-auto flex flex-col gap-8'>

                <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>

                    <h2 className='text-3xl font-bold tracking-widest'>
                        SOLE <span className='text-[#C99B60]'>X</span>
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className='flex w-full sm:w-[350px] bg-[#1c1c1c] rounded-full overflow-hidden border border-gray-700'
                    >

                        <input
                            type='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            className='w-full min-w-0 px-5 py-3 bg-transparent outline-none text-sm'
                        />

                        <button
                            type='submit'
                            className='bg-[#C99B60] text-black px-6 font-semibold hover:bg-[#E1B77F] transition'
                        >
                            Join
                        </button>

                    </form>

                </div>

                <div className='border-t border-gray-800 pt-5 text-center'>
                    <p className='text-sm text-gray-500'>
                        &copy; 2026 SOLEX. All Rights Reserved.
                    </p>
                </div>

            </div>

        </footer>
    )
}

export default Footer
