
import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const Hero = () => {

    return (
        <div className="px-4 md:px-10 py-6 pt-30 bg-[#222222]">

            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={900}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                className="heroSwiper"
            >

                {heroData.map((e) => (

                    <SwiperSlide key={e.id}>

                        <div className="relative bg-[#151515] border border-[#292929] rounded-2xl min-h-[600px] md:min-h-[550px] grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">

                            {/* Left Content */}

                            <div className="p-8 md:pl-16 md:pr-5 py-12 z-10">

                                <p className="text-[#C9A66B] uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-5">
                                    Premium Footwear Collection
                                </p>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-xl">
                                    {e.title}
                                </h1>

                                <p className="text-gray-400 mt-6 text-base md:text-lg max-w-md leading-relaxed">
                                    {e.description}
                                </p>

                                {/* Shop Button */}

                                <Link
                                    to='#products'
                                    className="mt-8 bg-[#C9A66B] text-black w-fit px-9 py-4 rounded-xl font-semibold flex items-center gap-5 hover:bg-[#D8B982] hover:scale-105 cursor-pointer transition duration-300"
                                >
                                    Shop Now
                                    <span className="text-xl">→</span>
                                </Link>

                            </div>


                            {/* Right Image */}

                            <div className="relative h-[320px] md:h-[550px] flex items-center justify-center p-5 md:p-8">

                                <div className="absolute w-[260px] h-[260px] md:w-[400px] md:h-[400px] bg-[#C9A66B]/15 rounded-full blur-3xl">
                                </div>

                                <img
                                    src={e.image}
                                    alt={e.badgeName}
                                    className="relative z-10 w-full h-full object-contain hover:scale-105 transition duration-700"
                                />

                                {/* Product Badge */}

                                <div className="absolute bottom-7 right-5 md:bottom-12 md:right-12 z-20 bg-[#202020]/95 backdrop-blur-sm border border-[#C9A66B]/30 text-white px-5 py-4 rounded-xl shadow-xl">

                                    <p className="text-[#C9A66B] text-xs mb-1">
                                        {e.badgeTitle}
                                    </p>

                                    <h3 className="font-semibold text-sm md:text-base">
                                        {e.badgeName}
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

            {/* Swiper Custom Styling */}
            <style>
                {`
    .heroSwiper.swiper - pagination {
    bottom: 18px!important;
}

                    .heroSwiper.swiper - pagination - bullet {
    background: #777777;
    opacity: 1;
}

                    .heroSwiper.swiper - pagination - bullet - active {
    background: #C9A66B;
    width: 25px;
    border - radius: 10px;
}
`}
            </style>

        </div>
    )
}

export default Hero


const heroData = [
    {
        id: 1,
        title: 'Step Into Greatness',
        description: 'Discover authentic branded shoes for every step of your journey.',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?fm=png&w=1400',
        badgeTitle: 'New Arrivals',
        badgeName: 'Nike Air Jordan 1'
    },
    {
        id: 2,
        title: 'Run With Confidence',
        description: 'Experience ultimate comfort with our premium running sneakers.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=png&w=1400',
        badgeTitle: 'Trending Now',
        badgeName: 'Nike Air Max'
    },
    {
        id: 3,
        title: 'Style Meets Comfort',
        description: 'Upgrade your everyday look with our latest sneaker collection.',
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?fm=png&w=1400',
        badgeTitle: 'Best Sellers',
        badgeName: 'Adidas Ultraboost'
    },
    {
        id: 4,
        title: 'Designed For Winners',
        description: 'Find your perfect fit and make every step count.',
        image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?fm=png&w=1400',
        badgeTitle: 'Popular Choice',
        badgeName: 'Puma RS-X'
    },
    {
        id: 5,
        title: 'Make Your Own Style',
        description: 'Discover timeless designs made for modern lifestyles.',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?fm=png&w=1400',
        badgeTitle: 'Latest Collection',
        badgeName: 'New Balance 574'
    }
]
