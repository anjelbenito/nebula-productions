import Link from "next/link";
import Image from "next/image";

type PortfolioItem = {

    name: string;
    role: string;
    description: string;
    images: string[];
    contact: string;
};

const portfolioData: Record<string, PortfolioItem> = {
    sophia: { contact: "cupidischewpid@gmail.com | @cupidhails" , name: "Sophia Romero", role: "Concept Artist", description: "Sophia specializes in early visual development, transforming abstract ideas into tangible character designs, storyboards, and key art. Her work focuses on bringing concept art to life through fluid 2D animation techniques.", images: ["/assets/sophia1.png", "/assets/sophia2.png", "/assets/sophia3.png"] },
    anjelika: { contact: "anjelbenito@gmail.com | @kohianji", name: "Anjelika Benito", role: "Concept Artist", description: "Anjelika’s portfolio highlights versatile artistic skills, encompassing detailed illustrations and expressive 2D animation for marketing materials and short narrative projects. She is key in defining the unique visual style of our projects.", images: ["/assets/anjelika1.png", "/assets/anjelika2.png", "/assets/anjelika3.png"] },
    matthew: { contact: "mattdekscastro@gmail.com | @matt.deks.4", name: "Matthew Castro", role: "3D Artist", description: "Matthew's specialization is in designing and rendering full 3D environments, including lighting and atmospheric effects. He is also responsible for the final polish and assembly of animated shorts through professional video editing.", images: ["/assets/matthew1.png", "/assets/matthew2.png", "/assets/matthew3.png"] },
    charie: { contact: "chariedianthactubil@gmail.com | @_rii.e", name: "Charie Tubil", role: "Content Developer", description: "Charie focuses on the narrative and informational structure of our projects. This includes scriptwriting, creative brief development, and crafting compelling content for both internal production and external client communication.", images: ["/assets/charie1.jpg", "/assets/charie2.jpg", "/assets/charie3.jpg"] },
    zelene: { contact: "haruuubabey@gmail.com | @hikariiiqt", name: "Zelene Plazuelo", role: "3D Artist", description: "Zelene focuses on three-dimensional modeling and texturing for environments and props. She integrates 3D elements seamlessly with illustrated backdrops, often using hybrid animation techniques for depth and realism.", images: ["/assets/zelene1.png", "/assets/zelene2.png", "/assets/zelene3.png"] },
    allana: { contact: "allanamarcelo27@gmail.com | @a.aalla__", name: "Allana Marcelo", role: "Concept Artist", description: "Allana manages the bridge between initial concept art and final animated sequences. Her expertise ensures that illustrations and character designs maintain consistency and quality as they move into the animation pipeline.", images: ["/assets/mar1.png", "/assets/mar2.png", "/assets/mar3.png"] },
};

export async function generateStaticParams() {
    // optional: pre-generate pages for all ids at build time
    return Object.keys(portfolioData).map((id) => ({ id }));
}

export default async function PortfolioPage(props: { params: any }) {
    // await the params Promise (unwrap)
    const params = await props.params;
    const rawId = String(params?.id ?? "");
    const id = decodeURIComponent(rawId).trim().replace(/^\/+|\/+$/g, "").toLowerCase();

    const data = portfolioData[id];

    if (!data) {
        return (
            <main className="min-h-screen flex items-center justify-center p-6 bg-[#020202]">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-white">Portfolio not found</h1>
                    <p className="text-gray-400 mt-2">The member you requested does not exist.</p>

                    <div className="mt-4 text-sm text-gray-300">
                        <div>Debug: params.id (raw) = <code className="bg-black/40 px-2 py-0.5 rounded">{rawId}</code></div>
                        <div>Debug: normalized id = <code className="bg-black/40 px-2 py-0.5 rounded">{id}</code></div>
                        <div className="mt-3">
                            <Link href="/#works" className="text-primary-purple hover:underline">Back to Works</Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="py-16 px-6 bg-[#06070a] min-h-screen">
            <div className="max-w-4xl mx-auto bg-violet-950 p-8 rounded-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-light-gray/20 pb-4 mb-8">
                    <Link href="/#works" className="px-4 py-2 text-white rounded-full hover:text-purple-400 transition-colors duration-200 text-sm">
                        &larr; Back to Works
                    </Link>
                    <h1 className="text-3xl font-extrabold text-white">Member Portfolio</h1>
                </div>

                <h2 className="text-4xl font-extrabold text-white mb-2">{data.name}</h2>
                <p className="text-lg mb-8">{data.role}</p>
                <p className="text-sm mb-8">{data.contact}</p>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-white mb-4 border-b border-light-gray/20 pb-2">Description</h3>
                    <p className="text-gray-400 leading-relaxed">{data.description}</p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-white mb-6 border-b border-light-gray/20 pb-2">Member's Work</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.images.map((src, idx) => (
                            <div key={idx} className="rounded overflow-hidden bg-black/40">
                                <Image src={src} alt={`${data.name} work ${idx + 1}`} width={800} height={600} className="object-cover w-full h-48" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
