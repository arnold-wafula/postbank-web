"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import TopBar from "./TopBar";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-white shadow-sm">
    <TopBar />
        <nav className="bg-white shadow relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
            {/* Logo aligned with TopBar start */}
            <Link href="/" className="flex-shrink-0">
            <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 relative">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6 text-[17px] font-small text-gray-800">
                    
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                        <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-4">
                        <ul className="grid gap-2 w-56 text-sm">
                            <li><Link href="/who-we-are">Who We Are</Link></li>
                            <li><Link href="/the-team">The Team</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/strategic-plan">Strategic Plan (2021-2025)</Link></li>
                            <li><Link href="/service-charter">Service Charter</Link></li>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Accounts</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-4">
                        <ul className="grid gap-3 w-64 text-sm">
                            <li>
                            <h4 className="font-semibold text-gray-600">Savings Accounts</h4>
                            <ul className="pl-3 mt-1 space-y-1">
                                <li><Link href="/m-chama-account">M-Chama Account</Link></li>
                                <li><Link href="/bidii-savings-account">Bidii Savings Account</Link></li>
                                <li><Link href="/saye-account">SAYE Account</Link></li>
                                <li><Link href="/step-account">STEP Account</Link></li>
                                <li><Link href="/waridi-account">Waridi Account</Link></li>
                            </ul>
                            </li>

                            <li className="mt-3">
                            <h4 className="font-semibold text-gray-600">Term & Pension</h4>
                            <ul className="pl-3 mt-1 space-y-1">
                                <li><Link href="/premium-plus-account">Premium Plus Account</Link></li>
                                <li><Link href="/akiba-pension-account">Akiba Pension Account</Link></li>
                            </ul>
                            </li>

                            <li className="mt-3">
                            <h4 className="font-semibold text-gray-600">Special Accounts</h4>
                            <ul className="pl-3 mt-1 space-y-1">
                                <li><Link href="/smata-account">SMATA Account</Link></li>
                            </ul>
                            </li>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-4">
                        <ul className="grid gap-3 w-64 text-sm">
                            <li>
                            <h4 className="font-semibold text-gray-600">Money Transfers</h4>
                            <ul className="pl-3 mt-1 space-y-1">
                                <li><Link href="/ria">RIA</Link></li>
                                <li><Link href="/western-union">Western Union</Link></li>
                                <li><Link href="/moneygram">MoneyGram</Link></li>
                            </ul>
                            </li>

                            <li className="mt-3">
                            <h4 className="font-semibold text-gray-600">Banking Services</h4>
                            <ul className="pl-3 mt-1 space-y-1">
                                <li><Link href="/mobile-banking">Mobile Banking</Link></li>
                                <li><Link href="/internet-banking">Internet Banking</Link></li>
                            </ul>
                            </li>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-4">
                        <ul className="grid gap-2 w-64 text-sm">
                            <li><Link href="/faqs">FAQs</Link></li>
                            <li><Link href="/downloads-forms">Downloads & Forms</Link></li>
                            <li><Link href="/branch-locator">Branch Locator</Link></li>
                            <li><Link href="/data-privacy-statement">Data Privacy Statement</Link></li>
                            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                        <Link href="/blog">Blog</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                        <Link href="/contact-us">Contact Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            
            <div className="hidden md:flex ml-4">
            <Button className="bg-[#ab9450] text-black font-semibold rounded-md hover:bg-[#bfa55c]">
                <Link href="/internet-banking">Internet Banking</Link>
            </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="focus:outline-none">
                    <Menu className="h-6 w-6 text-gray-800" />
                </Button>
                </SheetTrigger>

                <SheetContent
                    side="left"
                    className="p-6 z-[70] bg-white border-r border-gray-200 overflow-y-auto">
                        <nav className="flex flex-col gap-5 text-lg text-gray-800">
                            <Link href="/">Home</Link>

                            {/* About */}
                            <div>
                            <p className="font-semibold">About Us</p>
                            <ul className="ml-4 mt-2 space-y-1 text-base">
                                <li><Link href="/who-we-are">Who We Are</Link></li>
                                <li><Link href="/the-team">The Team</Link></li>
                            </ul>
                            </div>

                            {/* Accounts */}
                            <div>
                            <p className="font-semibold">Accounts</p>

                            <div className="ml-4 mt-2">
                                <p className="font-medium">Savings Accounts</p>
                                <ul className="ml-4 mt-1 space-y-1 text-base">
                                <li><Link href="/mchama-account">M-Chama Account</Link></li>
                                <li><Link href="/bidii-savings-account">Bidii Savings Account</Link></li>
                                <li><Link href="/saye-account">SAYE Account</Link></li>
                                <li><Link href="/step-account">STEP Account</Link></li>
                                <li><Link href="/waridi-account">Waridi Account</Link></li>
                                </ul>
                            </div>

                            <div className="ml-4 mt-4">
                                <p className="font-medium">Term & Pension</p>
                                <ul className="ml-4 mt-1 space-y-1 text-base">
                                <li><Link href="/premium-plus-account">Premium Plus Account</Link></li>
                                <li><Link href="/akiba-pension-account">Akiba Pension Account</Link></li>
                                </ul>
                            </div>

                            <div className="ml-4 mt-4">
                                <p className="font-medium">Special Accounts</p>
                                <ul className="ml-4 mt-1 space-y-1 text-base">
                                <li><Link href="/smata-account">SMATA Account</Link></li>
                                </ul>
                            </div>
                            </div>

                            {/* Services */}
                            <div>
                                <p className="font-semibold">Services</p>
                                <ul className="ml-4 mt-2 space-y-1 text-base">
                                    <li><Link href="/ria">RIA</Link></li>
                                    <li><Link href="/western-union">Western Union</Link></li>
                                    <li><Link href="/moneygram">MoneyGram</Link></li>
                                    <li><Link href="/mobile-banking">Mobile Banking</Link></li>
                                    <li><Link href="/internet-banking">Internet Banking</Link></li>
                                    <li><Link href="/loans">Loan Services</Link></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                            <p className="font-semibold">Resources</p>
                            <ul className="ml-4 mt-2 space-y-1 text-base">
                                <li><Link href="/faqs">FAQs</Link></li>
                                <li><Link href="/downloads">Downloads & Forms</Link></li>
                                <li><Link href="/branch-locator">Branch Locator</Link></li>
                                <li><Link href="/data-privacy">Data Privacy Statement</Link></li>
                                <li><Link href="terms">Terms & Conditions</Link></li>
                                <li><Link href="/gallery">Gallery</Link></li>
                            </ul>
                            </div>

                            {/* Blog */}
                            <div>
                                <Link href="/blog">Blog</Link>
                            </div>

                            {/* Contact Us */}
                            <div>
                                <Link href="/contact-us">Contact Us</Link>
                            </div>

                            {/* Internet Banking CTA */}
                            <Button className="bg-[#ab9450] hover:bg-[#bfa55c] text-black font-semibold mt-6">
                                <Link href="/internet-banking">Internet Banking</Link>
                            </Button>
                        </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && (
            <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 text-lg font-medium text-gray-800 md:hidden">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/accounts" onClick={() => setIsOpen(false)}>Accounts</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/transfers" onClick={() => setIsOpen(false)}>Money Transfers</Link></li>
            <li><Link href="/resources" onClick={() => setIsOpen(false)}>Resources</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
                <Button className="bg-[#ab9450] text-black font-semibold w-full mt-2 rounded-md">
                Internet Banking
                </Button>
            </li>
            </ul>
        )} */}
        </nav>
    </header>
      
    </>
  );
}