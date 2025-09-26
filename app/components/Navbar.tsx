import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center px-6 py-2 bg-white shadow">
            <Link href="/">
                <Logo />
            </Link>
            <ul className="flex gap-6 text-gray-700 text-sm sm:text-base">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}