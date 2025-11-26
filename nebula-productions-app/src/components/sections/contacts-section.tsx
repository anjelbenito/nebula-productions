export default function ContactsSection() {

    return (

        <section id="contacts" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Contacts</h2>
            <div className="max-w-xl mx-auto p-8 bg-mid-gray border border-primary-purple/50 rounded-xl shadow-2xl">
                <p className="text-gray-400 mb-6 text-center">
                </p>
                <form action="#" method="POST" className="space-y-4">
                    <input type="text" placeholder="Your Name"
                           className="w-full p-3 bg-dark-bg border border-mid-gray rounded text-light-gray focus:border-primary-purple"/>
                    <input type="email" placeholder="Your Email"
                           className="w-full p-3 bg-dark-bg border border-mid-gray rounded text-light-gray focus:border-primary-purple"/>
                    <textarea placeholder="Your Message" rows={4}
                              className="w-full p-3 bg-dark-bg border border-mid-gray rounded text-light-gray focus:border-primary-purple"></textarea>
                    <button type="submit"
                            className="
                            relative inline-block mt-4 text-sm font-medium
                            px-5 py-2 rounded-full
                            text-white
                            bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700
                            shadow-[0_0_15px_rgba(168,85,247,0.5)]
                            transition duration-300
                            hover:shadow-[0_0_25px_rgba(192,132,252,0.9)]
                            hover:scale-105
                            ">
                        Send Data
                    </button>
                </form>
            </div>
        </section>

    )

}