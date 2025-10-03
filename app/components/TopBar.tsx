export default function TopBar() {
    return(
        <div className="w-full">
            {/* Topbar main */}
            <div className="bg-[#1873b7] text-white text-sm py-2 px-6 flex justify-between items-center">
                <span className="font-medium">
                    Secure Banking • Trusted Since 1910
                </span>

                <div className="flex flex-wrap items-center gap-4">
                    <a href="tel:+254700000000" className="hover:underline">
                        +254 700 000 000
                    </a>
                    <a href="/news" className="hover:underline">
                        News
                    </a>
                    <a href="/careers" className="hover:underline">
                        Careers
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact Us
                    </a>
                    <a href="/tenders" className="hover:underline">
                        Tenders
                    </a>
                </div>
            </div>

            {/* Red separator strip */}
            <div className="h-1 bg-[#ea373b]"/>
        </div>
    )
}