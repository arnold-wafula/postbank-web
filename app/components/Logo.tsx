import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Image
                src="/logo.png"
                alt="Postbank Logo"
                width={120}
                height={50}
                className="object-contain max-h-12 w-auto"
                priority
            />
        </div>
    );
}