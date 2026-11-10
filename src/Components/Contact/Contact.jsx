
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
            className="min-h-screen pt-30 bg-[#222222] text-white py-20 px-5 md:px-10 flex items-center"
        >

            <div className="max-w-6xl mx-auto w-full">

                {/* Heading */}
                <div className="text-center mb-14">

                    <p className="text-[#C9A66B] text-sm font-semibold tracking-[4px] uppercase mb-4">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Let's <span className="text-[#C9A66B]">Connect</span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
                        Have a project, opportunity, or just want to say hello?
                        Feel free to get in touch with me.
                    </p>

                </div>

                {/* Main Card */}
                <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 lg:p-12 bg-[#151515] border border-[#333333] shadow-2xl">

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Left Section */}
                        <div>

                            <span className="text-[#C9A66B] text-sm font-semibold uppercase tracking-[3px]">
                                Contact Me
                            </span>

                            <h3 className="text-3xl sm:text-4xl font-bold mt-4 mb-5 text-white">
                                Let's work
                                <span className="text-[#C9A66B]"> together.</span>
                            </h3>

                            <p className="text-gray-400 leading-7 max-w-md mb-8">
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
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-[#202020] border border-[#333333] hover:border-[#C9A66B] hover:bg-[#252525] transition-all duration-300 group"
                                        >

                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#C9A66B]/10 border border-[#C9A66B]/30 flex items-center justify-center text-[#C9A66B] group-hover:bg-[#C9A66B] group-hover:text-black transition-all duration-300">

                                                <Icon size={18} />

                                            </div>

                                            <div className="min-w-0">

                                                <p className="text-xs text-gray-400 mb-1">
                                                    {item.title}
                                                </p>

                                                <p className="font-medium text-white truncate">
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
                            <div className="w-24 h-24 rounded-3xl bg-[#C9A66B]/10 border border-[#C9A66B]/30 flex items-center justify-center text-[#C9A66B] mb-7">

                                <FaEnvelope className="text-4xl" />

                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                                Have an idea?
                            </h3>

                            <p className="max-w-sm text-gray-400 leading-7 mb-7">
                                Let's turn your idea into a modern and
                                interactive web experience.
                            </p>

                            {/* Email Button */}
                            <a
                                href="mailto:hellonitin101@gmail.com"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C9A66B] text-black font-semibold hover:bg-[#D8B982] hover:scale-105 transition-all duration-300"
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
                                            className="w-11 h-11 rounded-full bg-[#202020] border border-[#333333] flex items-center justify-center text-gray-400 hover:bg-[#C9A66B] hover:text-black hover:border-[#C9A66B] hover:scale-110 transition-all duration-300"
                                        >

                                            <Icon size={18} />

                                        </a>
                                    )

                                })}

                            </div>

                        </div>

                    </div>

                    {/* Founder Section */}
                    <div className="border-t border-[#333333] mt-12 pt-8 text-center">

                        <p className="text-gray-400 text-xs uppercase tracking-[3px] mb-3">
                            Designed & Developed By
                        </p>

                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            Founder <span className="text-[#C9A66B]">Nitin Singh Shekhaawat</span>
                        </h3>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact