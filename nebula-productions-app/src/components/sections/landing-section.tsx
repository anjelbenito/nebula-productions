import Image from "next/image";
import Link from "next/link";

export default function LandingSection() {

    return (


        <main className="container mx-auto mt-12">

            <section id="hero" className="text-center mb-20 md:mb-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        A collective of digital animators bringing stories to life
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        We are a collaborative studio specializing in motion design, 3D modeling, and narrative
                        visualization.
                    </p>
                    <Link href="#works"
                       className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600
             text-white font-semibold shadow-lg hover:shadow-purple-500/50
             transition-transform active:scale-95 hover:scale-105">
                        View Works
                    </Link>
                </div>

                <div className="mt-16 flex justify-center space-x-4">
                    <div
                        className="w-64 h-48 bg-mid-gray border border-primary-purple/50 rounded-lg shadow-xl overflow-hidden">
                        <div
                            className="h-4 bg-mid-gray border-b border-primary-purple/50 flex items-center px-2 space-x-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>
                        <div className="text-center pt-8 text-gray-500">Digital Media</div>
                    </div>
                    <div
                        className="w-64 h-48 bg-mid-gray border border-primary-purple/50 rounded-lg shadow-xl overflow-hidden hidden sm:block">
                        <div
                            className="h-4 bg-mid-gray border-b border-primary-purple/50 flex items-center px-2 space-x-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>
                        <div className="text-center pt-8 text-gray-500">Collaborative Work</div>
                    </div>
                </div>
            </section>

            <section id="about"
                     className="mb-20 md:mb-32 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-12 p-8 bg-mid-gray rounded-xl shadow-2xl">

                <div className="flex-shrink-0">
                    <svg className="w-48 h-48 mx-auto" viewBox="0 0 100 100" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="48" className="nebula-gradient" opacity="0.1"></circle>
                        <path d="M50 8a42 42 0 010 84 42 42 0 010-84zm0 24a18 18 0 100 36 18 18 0 000-36z"
                              fill="url(#nebula-grad-fill)"/>
                        <defs>
                            <linearGradient id="nebula-grad-fill" x1="50" y1="8" x2="50" y2="92"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9333ea"/>
                                <stop offset="1" stop-color="#c084fc"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="md:max-w-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                    <p className="text-gray-400 mb-4">
                        Nebula is a collective born from a shared passion for storytelling through digital animation.
                        Our diverse backgrounds in 2D, 3D, and visual effects enable us to tackle complex projects with
                        creativity and technical precision, delivering impactful visuals that resonate with audiences.
                    </p>
                    <Link href="#works"
                       className="px-6 py-2 bg-purple-700 text-white font-medium rounded-full shadow-md hover:bg-primary-purple/80 transition duration-300">
                        View Works
                    </Link>
                </div>
            </section>

            <section id="portfolio-page" className="hidden my-10 p-8 bg-mid-gray rounded-xl shadow-2xl">
                <div className="max-w-4xl mx-auto">

                    <div className="flex justify-between items-center border-b border-light-gray/20 pb-4 mb-8">
                        <button className="px-4 py-2 bg-primary-purple/50 text-white rounded-full hover:bg-primary-purple transition text-sm">

                        </button>
                        <h1 className="text-3xl font-extrabold text-white">Member Portfolio</h1>
                    </div>

                    <h2 id="portfolio-title" className="text-4xl font-extrabold text-white mb-2"></h2>
                    <p id="portfolio-role" className="text-lg text-primary-purple mb-8"></p>

                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-white mb-4 border-b border-light-gray/20 pb-2">Description</h3>
                        <p id="portfolio-description" className="text-gray-400 leading-relaxed">
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-white mb-6 border-b border-light-gray/20 pb-2">Member's
                            Work</h3>
                        <div id="member-work-container" className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        </div>
                    </div>

                    <div className="text-center pt-4 text-gray-500 text-sm">
                        End of Dedicated Portfolio View
                    </div>
                </div>
            </section>
        </main>
    )
}