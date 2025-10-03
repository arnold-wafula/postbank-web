"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import TopBar from "./TopBar";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu"
  
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <TopBar />

            {/* Main Navbar */}
            <nav className="flex justify-between items-center h-16 px-6 bg-white shadow relative z-50">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Logo />
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* About Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                <NavigationMenuContent className="P-4">
                                    <ul className="grid gap-2 w-48">
                                        <li><Link href="/about/who-we-are">Who We Are</Link></li>
                                        <li><Link href="/about/team">The Team</Link></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Savings Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Savings Accounts</NavigationMenuTrigger>
                                <NavigationMenuContent className="p-4">
                                    <ul className="grid gap-2 w-56">
                                        <li><Link href="/savings/mchama">M-Chama Account</Link></li>
                                        <li><Link href="/savings/bidii">Bidii Savings</Link></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Transfers Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Money Transfers</NavigationMenuTrigger>
                                <NavigationMenuContent className="p-4">
                                    <ul className="grid gap-2 w-56">
                                    <li><Link href="/transfers/ria">RIA</Link></li>
                                    <li><Link href="/transfers/western-union">Western Union</Link></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/services">Services</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/resources">Resources</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

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
        </>
    );
}