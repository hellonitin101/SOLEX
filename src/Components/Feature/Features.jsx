
import React from 'react'
import { Truck, RefreshCw, ShieldCheck, WalletCards } from 'lucide-react'

const Features = () => {

    const features = [
        {
            icon: <Truck size={32} strokeWidth={1.7} />,
            title: 'Free Shipping',
            description: 'On orders over $100'
        },
        {
            icon: <RefreshCw size={32} strokeWidth={1.7} />,
            title: '30-Day Returns',
            description: 'Hassle-free returns'
        },
        {
            icon: <ShieldCheck size={32} strokeWidth={1.7} />,
            title: '100% Authentic',
            description: 'Genuine branded products'
        },
        {
            icon: <WalletCards size={32} strokeWidth={1.7} />,
            title: 'Secure Payments',
            description: 'Safe & encrypted checkout'
        }
    ]

    return (
        <div className="w-full bg-white px-5 md:px-10 py-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-5 bg-gray-50 px-6 py-6 rounded-xl"
                    >

                        <div className="text-gray-800">
                            {item.icon}
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Features
