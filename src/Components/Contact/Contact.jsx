import React from 'react'
import {
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaArrowRight
} from 'react-icons/fa'

const Contact = () => {

    const contactInfo = [
        {
            icon: FaPhoneAlt,
            title: 'Phone',
            value: '+91 9461947107',
            link: 'tel:+919461947107',
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'hellonitin101@gmail.com',
            link: 'mailto:hellonitin101@gmail.com',
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: 'Chat with me',
            link: 'https://wa.me/919461947107',
        },
    ]

    const socialLinks = [
        {
            icon: FaGithub,
            link: 'https://github.com/hellonitin101',
        },
        {
            icon: FaInstagram,
            link: 'https://www.instagram.com/web_devacademy/',
        },
        {
            icon: FaYoutube,
            link: 'https://www.youtube.com/@WebDevAcademyHindi',
        },
    ]

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#F8F7F4] text-gray-900 py-20 px-5 md:px-10 flex items-center"
        >

            <div className="max-w-6xl mx-auto w-full">

                {/* Heading */}
                <div className="text-center mb-14">

                    <p className="text-[#B99C60] text-sm font-semibold tracking-[4px] uppercase mb-4">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold">
                        Let's <span className="text-[#B99C60]">Connect</span>
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-7">
                        Have a project, opportunity, or just want to say hello?
                        Feel free to get in touch with me.
                    </p>

                </div>

                {/* Main Card */}
                <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 lg:p-12 bg-white border border-[#B99C60]/20 shadow-xl">

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Left Section */}
                        <div>

                            <span className="text-[#B99C60] text-sm font-semibold uppercase tracking-[3px]">
                                Contact Me
                            </span>

                            <h3 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">
                                Let's work
                                <span className="text-[#B99C60]"> together.</span>
                            </h3>

                            <p className="text-gray-500 leading-7 max-w-md mb-8">
                                I'm always open to discussing new projects,
                                creative ideas, and opportunities to be part of
                                your vision.
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-4">

                                {contactInfo.map((item) => {

                                    const Icon = item.icon

                                    return (
                                        <a
                                            key={item.title}
                                            href={item.link}
                                            target={item.title === 'WhatsApp' ? '_blank' : undefined}
                                            rel={item.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F7F4] border border-gray-100 hover:border-[#B99C60]/50 hover:bg-[#B99C60]/5 transition-all duration-300 group"
                                        >

                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#B99C60]/10 border border-[#B99C60]/20 flex items-center justify-center text-[#B99C60] group-hover:bg-[#B99C60] group-hover:text-white transition-all duration-300">

                                                <Icon size={18} />

                                            </div>

                                            <div className="min-w-0">

                                                <p className="text-xs text-gray-500 mb-1">
                                                    {item.title}
                                                </p>

                                                <p className="font-medium text-gray-800 truncate">
                                                    {item.value}
                                                </p>

                                            </div>

                                        </a>
                                    )

                                })}

                            </div>

                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">

                            {/* Email Icon */}
                            <div className="w-24 h-24 rounded-3xl bg-[#B99C60]/10 border border-[#B99C60]/30 flex items-center justify-center text-[#B99C60] mb-7">

                                <FaEnvelope className="text-4xl" />

                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                                Have an idea?
                            </h3>

                            <p className="max-w-sm text-gray-500 leading-7 mb-7">
                                Let's turn your idea into a modern and
                                interactive web experience.
                            </p>

                            {/* Email Button */}
                            <a
                                href="mailto:hellonitin101@gmail.com"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#B99C60] text-white font-semibold hover:bg-[#A7894F] hover:scale-105 transition-all duration-300"
                            >

                                Send Me an Email

                                <FaArrowRight size={14} />

                            </a>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-8">

                                {socialLinks.map((social, index) => {

                                    const Icon = social.icon

                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-full border border-[#B99C60]/30 flex items-center justify-center text-gray-600 hover:bg-[#B99C60] hover:text-white hover:border-[#B99C60] hover:scale-110 transition-all duration-300"
                                        >

                                            <Icon size={18} />

                                        </a>
                                    )

                                })}

                            </div>

                        </div>

                    </div>

                    {/* Founder Section */}
                    <div className="border-t border-gray-200 mt-12 pt-8 text-center">

                        <p className="text-gray-500 text-xs uppercase tracking-[3px] mb-3">
                            Designed & Developed By
                        </p>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            Founder <span className="text-[#B99C60]">Nitin Singh Shekhaawat</span>
                        </h3>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact