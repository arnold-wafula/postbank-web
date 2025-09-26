"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center h-16 px-6 bg-white shadow relative z-50">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Logo />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-gray-800 p-2 focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 text-lg font-semibold text-gray-800 md:hidden">
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
}