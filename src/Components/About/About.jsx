
import React from 'react'
import {
    Award,
    Heart,
    ShieldCheck,
    Truck,
    ArrowUpRight
} from 'lucide-react'

import Founder from '../../Assets/Founder.png'

const About = () => {

    const features = [
        {
            icon: <Award size={24} />,
            title: 'Premium Quality',
            desc: 'Quality footwear designed for comfort and durability.'
        },
        {
            icon: <Heart size={24} />,
            title: 'Made with Passion',
            desc: 'Every pair reflects our passion for footwear.'
        },
        {
            icon: <ShieldCheck size={24} />,
            title: 'Trusted Shopping',
            desc: 'A simple and reliable shopping experience.'
        },
        {
            icon: <Truck size={24} />,
            title: 'Easy Delivery',
            desc: 'Get your favourite footwear delivered to your door.'
        }
    ]

    return (
        <div className="w-full bg-[#222222] pt-30 text-white">

            {/* About Heading */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 pt-12 pb-8">

                <div className="text-center">

                    <p className="text-[#C9A66B] text-xs tracking-[4px] uppercase mb-3">
                        Who We Are
                    </p>

                    <h1 className="text-3xl md:text-4xl font-semibold">
                        About SOLE
                        <span className="text-[#C9A66B]">X</span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-7">
                        Bringing style, comfort and quality together.
                        Discover footwear that matches your personality.
                    </p>

                </div>

            </section>

            {/* Brand Story */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

                    {/* Image */}
                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000"
                            alt="SOLE X footwear"
                            className="w-full h-[280px] md:h-[380px] object-cover rounded-full"
                        />

                        <div className="absolute bottom-4 left-4 bg-[#111111] border border-[#333333] px-5 py-3 rounded-xl shadow-lg">

                            <p className="text-xs text-gray-400">
                                Our Philosophy
                            </p>

                            <p className="font-semibold text-sm text-white">
                                Style in Every Step.
                            </p>

                        </div>

                    </div>

                    {/* Story Content */}
                    <div className="py-3">

                        <p className="text-[#C9A66B] text-xs tracking-[3px] uppercase mb-3">
                            Our Story
                        </p>

                        <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-5">
                            More Than Just
                            <span className="text-[#C9A66B]"> Footwear.</span>
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base leading-7 mb-4">
                            At SOLE X, we believe footwear is more than just
                            something you wear. It represents your style,
                            personality and confidence.
                        </p>

                        <p className="text-gray-400 text-sm md:text-base leading-7">
                            Our aim is to bring together modern designs,
                            everyday comfort and quality to make every step
                            special.
                        </p>

                        <div className="flex gap-8 mt-8">

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    SOLE
                                    <span className="text-[#C9A66B]">X</span>
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    Our Brand
                                </p>
                            </div>

                            <div className="w-px bg-[#444444]"></div>

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Style
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    Our Identity
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Choose Us */}
            <section className="bg-[#111111] py-14 md:py-16 mt-8">

                <div className="max-w-7xl mx-auto px-5 md:px-10">

                    <div className="text-center mb-10">

                        <p className="text-[#C9A66B] text-xs tracking-[3px] uppercase mb-3">
                            Why Choose Us
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            The SOLE X Difference
                        </h2>

                        <p className="text-gray-500 text-sm mt-3">
                            What makes your shopping experience special.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {features.map((item, index) => (

                            <div
                                key={index}
                                className="group bg-[#202020] p-7 rounded-2xl border border-[#292929] hover:border-[#C9A66B] hover:-translate-y-1 transition-all duration-300"
                            >

                                <div className="w-12 h-12 rounded-full bg-[#30291E] text-[#C9A66B] flex items-center justify-center mb-5 group-hover:bg-[#C9A66B] group-hover:text-[#111111] transition-all duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold text-base mb-2 text-white">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-6">
                                    {item.desc}
                                </p>

                                <div className="mt-5 text-[#C9A66B] flex justify-end">
                                    <ArrowUpRight size={18} />
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Founder Section */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-16">

                <div className="bg-[#111111] border border-[#292929] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">

                    {/* Founder Image */}
                    <div className="py-10 flex justify-center items-center">

                        <div className="h-[280px] w-[280px] md:h-[350px] md:w-[350px] overflow-hidden rounded-full border-2 border-[#C9A66B]">

                            <img
                                src={Founder}
                                alt="Founder of SOLE X"
                                className="w-full h-full object-cover object-top rounded-full"
                            />

                        </div>

                    </div>

                    {/* Founder Details */}
                    <div className="p-7 md:p-12 lg:p-16">

                        <p className="text-[#C9A66B] text-xs tracking-[3px] uppercase mb-4">
                            Meet The Founder
                        </p>

                        <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-white">
                            Nitin Singh
                            <span className="text-[#C9A66B] block">
                                Shekhawat
                            </span>
                        </h2>

                        <p className="text-gray-400 text-sm mt-3 mb-6">
                            Founder of SOLE
                            <span className="text-[#C9A66B]">X</span>
                        </p>

                        <div className="w-12 h-[2px] bg-[#C9A66B] mb-6"></div>

                        <p className="text-gray-400 text-sm md:text-base leading-7">
                            SOLE X was created with a vision to bring style,
                            comfort and quality together. Our mission is to
                            make every customer feel confident with every step.
                        </p>

                        <p
                            className="font-medium text-[#C9A66B] mt-8 italic text-lg"
                            style={{ fontFamily: 'cursive' }}
                        >
                            Nitin Singh Shekhawat
                        </p>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default About
