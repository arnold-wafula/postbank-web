"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
    const partners = [
        {name: "Credit Bank", logo: "/credit-bank-logo.png"},
        {name: "Absa", logo: "/absa-group-logo.png"},
        {name: "NCBA", logo: "/ncba-logo.png"},
        {name: "Stanbic", logo: "/stanbic-bank-logo.jpg"},
    ]
    return(
        <section className="relative bg-black text-white py-20 overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-10 pointer-events-none"></div>

            {/* Gold Accent line */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-[#ab9450]" /> */}

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6 text-center space-y-10 z-10">
                <h2 className="text-4xl font-bold">Our Partners</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We&apos;re proud to collaborate with organizations that share our vision for a financially empowered Kenya.
                </p>

                {/* Logos Row */}
                <div className="flex flex-wrap justify-center items-center gap-12 mt-10">
                    {partners.map((partner) => (
                        <motion.div
                        key={partner.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center w-44 h-24 bg-white/5 rounded-xl"
                        >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={120}
                            height={60}
                            className="object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
                        />
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Subtle top gradient for polish */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ab9450]/10 to-transparent pointer-events-none" />
        </section>
    );
}