export default function Navbar() {
    return(
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <div className="font-bold text-xl text-blue-700">Postbank</div>
            <ul className="flex gap-6 text-gray-700">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}