import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <div className="font-bold text-xl text-blue-700">Postbank</div>
            <ul className="flex gap-6 text-gray-700">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}