const testimonials = [
    {
        name: "David Chen",
        text: '"The precision of the data is unlike anything else on the market. In 3 months, my HRV has increased by 15ms and my sleep quality is off the charts."',
        role: "Biohacker & CEO",
        avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Sarah Miller",
        text: '"I finally understand my body\'s unique requirements. No more guessing games with supplements—now I only take what I actually need."',
        role: "Endurance Athlete",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Mark Thompson",
        text: '"At 55, I have more energy than I did in my 30s. The protocol is easy to follow and the results are scientifically undeniable."',
        role: "Executive",
        avatar: "https://i.pravatar.cc/150?img=12"
    }
]

export default function LandingTestimonials() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Heading */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#353026] dark:text-white leading-tight tracking-tight">
                        Real People, Real Results,<br /> Real Transformation
                    </h2>
                    <p className="text-[#64748b] dark:text-gray-400 text-[15px] sm:text-[17px]">
                        What people say about their transformation journey.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {testimonials.map((testi, index) => (
                        <div key={index} className="flex flex-col p-8 rounded-[32px] border border-gray-50 dark:border-zinc-800 bg-[#fafafa] dark:bg-zinc-900 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">

                            {/* Profile Info Top */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                                    <img src={testi.avatar} alt={testi.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[16px] text-[#0f172a] dark:text-white leading-tight">{testi.name}</h4>
                                    <p className="text-[12px] font-medium text-[#94a3b8] dark:text-gray-400 mt-0.5">{testi.role}</p>
                                </div>
                            </div>

                            {/* Testimonial Text Bottom */}
                            <p className="text-[14px] text-[#64748b] dark:text-gray-400 leading-relaxed font-medium">
                                {testi.text}
                            </p>

                        </div>
                    ))}
                </div>

                {/* Bottom Register Button */}
                <div className="flex justify-center mt-8">
                    <button className="bg-[#fad046] hover:bg-[#e6be3e] text-[#353026] font-bold text-[15px] py-[14px] px-10 rounded-full transition-all shadow-md hover:shadow-lg">
                        Register Now
                    </button>
                </div>

            </div>
        </section>
    )
}
