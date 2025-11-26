"use client";

import { useRouter } from "next/navigation";

export default function NavBar() {
    const route = useRouter();

    return (
        <header className="flex justify-between items-center py-4 px-6 border-b border-mid-gray rounded-lg">
            <div className="flex items-center space-x-2">
                <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xl font-bold text-white">Nebula</span>
            </div>

            <nav className="space-x-6 hidden sm:flex">
                {[
                    { label: "Home", link: "/" },
                    { label: "About", link: "/#about" },
                    { label: "Works", link: "/#works" },
                    { label: "Contacts", link: "/#contacts" },
                ].map((item) => (
                    <button
                        key={item.label}
                        onClick={() => route.push(item.link)}
                        className="
        relative text-white transition
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[2px]
        after:bg-purple-500 after:transition-all after:duration-300
        hover:after:w-full hover:text-purple-300
      "
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            <button
                onClick={() => route.push('/#works')}
                className="px-6 py-3 font-semibold text-white rounded-full bg-black border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition"
            >
                View Works
            </button>
        </header>
    );
}