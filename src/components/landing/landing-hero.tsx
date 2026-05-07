import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function LandingHero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
            {/* Full-bleed Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Meditating figure with glowing chakras and mandala"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
                {/* Black linear gradient overlay (20% overall opacity effect, darker behind text) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 pointer-events-none" />
            </div>

            {/* Content — extremely left-aligned, vertically centered */}
            <div className="relative z-10 h-full flex items-center w-full justify-start px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <div className="w-full">
                    <div className="max-w-xl">
                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl md:text-[72px] font-display font-normal leading-tight md:leading-[72px] tracking-[0px] align-middle text-white mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                            Manifest Your<br />
                            Inner Peace
                        </h1>

                        {/* Sub-paragraph */}
                        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-10 max-w-md drop-shadow-md">
                            Discover our curated collection of energized crystals and reiki tools
                            designed to balance your energy and elevate your soul.
                        </p>

                        {/* Action row */}
                        <div className="flex flex-wrap items-center gap-5">
                            {/* Register CTA */}
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-bold shadow-lg group transition-transform hover:scale-105"
                            >
                                Register Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>

                            {/* Community badge */}
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/15 rounded-full py-1.5 pl-2 pr-5 shadow-lg">
                                <div className="flex -space-x-2.5">
                                    {[1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className="h-9 w-9 rounded-full border-2 border-white/30 overflow-hidden"
                                        >
                                            <img
                                                src={`https://i.pravatar.cc/80?u=spirit${i}`}
                                                alt="community member"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-[9px] font-extrabold text-primary-foreground border-2 border-white/30">
                                        +12k
                                    </div>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-white font-bold text-xs">
                                        12,400+ Souls Aligned
                                    </span>
                                    <span className="text-white/50 text-[9px] uppercase tracking-[0.15em] font-bold mt-0.5">
                                        Global Community
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-white" />
                <div className="h-2 w-2 rounded-full bg-white/40" />
                <div className="h-2 w-2 rounded-full bg-white/40" />
            </div>
        </section>
    )
}
