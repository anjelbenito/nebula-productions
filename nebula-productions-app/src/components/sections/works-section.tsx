import Link from "next/link";

export default function WorksSection() {
    const people = [
        { name: "Sophia Romero", id: "sophia", emoji: "💻" },
        { name: "Anjelika Benito", id: "anjelika", emoji: "🎨" },
        { name: "Matthew Castro", id: "matthew", emoji: "📱" },
        { name: "Charie Tubil", id: "charie", emoji: "📝" },
        { name: "Zelene Plazuelo", id: "zelene", emoji: "✍️" },
        { name: "Allana Marcelo", id: "allana", emoji: "🚀" },
    ];

    return (
        <section id="works" className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                    Individual Portfolios
                </h2>
                <p className="text-center text-gray-500 mb-10">
                    Click on a member's entry to view their full portfolio of works.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {people.map((p) => (
                        <article
                            key={p.id}
                            className="
                            bg-mid-gray border border-primary-purple/40 rounded-xl
                            shadow-xl overflow-hidden p-6
                            transition-all duration-300 transform

                            hover:-translate-y-2
                            hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                            hover:border-purple-400
                            hover:bg-mid-gray/80
                            "
                        >
                            <div className="h-4 bg-mid-gray border-b border-primary-purple/50 flex items-center px-2 space-x-1 mb-6">
                                <span className="w-2 h-2 bg-red-500 rounded-full" />
                                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                                <span className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="text-5xl mb-4 file-icon">{p.emoji}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{p.name}</h3>

                                <Link
                                    href={`/portfolios/${p.id}`}
                                    className="
                                    relative inline-block mt-4 text-sm font-medium
                                    px-5 py-2 rounded-full
                                    text-white
                                    bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700
                                    shadow-[0_0_15px_rgba(168,85,247,0.5)]
                                    transition duration-300
                                    hover:shadow-[0_0_25px_rgba(192,132,252,0.9)]
                                    hover:scale-105
                                    "
                                >
                                    View Portfolio
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}