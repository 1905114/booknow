import Image from "next/image"

export default function LandingAbout() {
    return (
        <section id="section" className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden flex justify-center">
            <div className="container max-w-[1100px] px-6 sm:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Side Content */}
                    <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 w-full">
                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#3A2A1A] dark:text-[#E8DCCB] leading-[1.15]">
                                About the Practice
                            </h2>
                            <p className="text-lg sm:text-[19px] text-[#6b625a] dark:text-zinc-400">
                                What people say about their transformation journey.
                            </p>
                        </div>

                        <div className="space-y-6 text-[#726458] dark:text-zinc-400 text-base sm:text-[17px] leading-[1.8] max-w-lg">
                            <p>
                                For over two decades, I have worked with clients seeking clarity beyond
                                logic — addressing emotional, spiritual, environmental, and business-
                                related energetic blocks.
                            </p>
                            <p>
                                My approach is structured, ethical, and practical. No fear
                                based predictions. No unnecessary rituals. Only disciplined spiritual
                                alignment and corrective remedies.
                            </p>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square sm:aspect-[4/5] lg:aspect-square group animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="relative h-full w-full rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl bg-zinc-100">
                            <Image
                                src="/about.jpg"
                                alt="Artistic spiritual guide representation"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

