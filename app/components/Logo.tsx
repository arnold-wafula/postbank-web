import Image from "next/image";

export default function Logo() {
    return(
        <div className="flex items-center">
            <div className="relative w-auto h-10"> 
                <Image
                    src="/logo.png"
                    alt="Postbank Logo"
                    width={100}
                    height={40}
                    priority
                />
            </div>
        </div>
    )
}