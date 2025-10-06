"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
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
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 w-56">
                      <li><Link href="/about/who-we-are">Who We Are</Link></li>
                      <li><Link href="/about/team">The Team</Link></li>
                      <li><Link href="/about/board">Board of Directors</Link></li>
                      <li><Link href="/about/our-history">Our History</Link></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Accounts</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 w-56">
                      <li><Link href="/accounts/savings">Savings Accounts</Link></li>
                      <li><Link href="/accounts/current">Current Accounts</Link></li>
                      <li><Link href="/accounts/term-deposits">Term Deposit Accounts</Link></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Money Transfers</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 w-56">
                      <li><Link href="/transfers/ria">RIA</Link></li>
                      <li><Link href="/transfers/western-union">Western Union</Link></li>
                      <li><Link href="/transfers/moneygram">MoneyGram</Link></li>
                      <li><Link href="/transfers/internal">Internal Transfers</Link></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 w-56">
                      <li><Link href="/services/mobile-banking">Mobile Banking</Link></li>
                      <li><Link href="/services/agency-banking">Agency Banking</Link></li>
                      <li><Link href="/services/loans">Loans</Link></li>
                      <li><Link href="/services/cards">Cards</Link></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 w-56">
                      <li><Link href="/resources/downloads">Downloads</Link></li>
                      <li><Link href="/resources/tariffs">Tariffs</Link></li>
                      <li><Link href="/resources/forms">Forms</Link></li>
                      <li><Link href="/resources/service-charter">Service Charter</Link></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button aligned with TopBar end */}
          <div className="hidden md:flex ml-4">
            <Button
              className="bg-[#ab9450] text-black font-semibold rounded-md hover:bg-[#bfa55c]"
            >
              Internet Banking
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
                className="p-6 z-[70] bg-white border-r border-gray-200"
              >
                <nav className="flex flex-col gap-4 text-lg text-gray-800">
                  <Link href="/">Home</Link>
                  
                  <div>
                    <p className="font-semibold">About</p>
                    <ul className="ml-4 mt-2 space-y-1 text-base">
                      <li><Link href="/about/who-we-are">Who We Are</Link></li>
                      <li><Link href="/about/team">The Team</Link></li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Savings Accounts</p>
                    <ul className="ml-4 mt-2 space-y-1 text-base">
                      <li><Link href="/savings/mchama">M-Chama</Link></li>
                      <li><Link href="/savings/bidii">Bidii Savings</Link></li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Money Transfers</p>
                    <ul className="ml-4 mt-2 space-y-1 text-base">
                      <li><Link href="/transfers/ria">RIA</Link></li>
                      <li><Link href="/transfers/western-union">Western Union</Link></li>
                    </ul>
                  </div>

                  <Link href="/services">Services</Link>
                  <Link href="/resources">Resources</Link>

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
    </>
  );
}