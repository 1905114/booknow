import Image from "next/image"

const discoverSteps = [
    {
        id: "1",
        title: "Spiritual Awareness",
        desc: "Begin your journey by understanding your inner self. Through reflection and guidance, discover the current state of your mind, soul, and energy."
    },
    {
        id: "2",
        title: "Energy & Chakra Alignment",
        desc: "Restore harmony within your body and spirit through meditation, chakra balancing, and mindful spiritual practices."
    },
    {
        id: "3",
        title: "Conscious Spiritual Growth",
        desc: "Continue evolving with deeper wisdom and guidance, helping you walk your life path with clarity, peace, and purpose."
    }
]

export default function LandingDiscover() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Main rounded container */}
                <div className="flex flex-col lg:flex-row w-full rounded-[40px] overflow-hidden shadow-sm">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 bg-[#fdf4ce] dark:bg-yellow-900/10 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                        <p className="text-[11px] font-bold text-[#353026] dark:text-gray-300 uppercase tracking-[0.2em] mb-6">
                            YOUR JOURNEY
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#353026] dark:text-white mb-14 leading-[1.2] tracking-tight">
                            Discover,<br className="hidden md:block" /> align, and awaken<br className="hidden md:block" /> your inner spirit.
                        </h2>

                        <div className="space-y-10">
                            {discoverSteps.map((step, index) => (
                                <div key={index} className="flex gap-5">
                                    {/* Number Circle */}
                                    <div className="w-[34px] h-[34px] rounded-full bg-[#fae588] dark:bg-yellow-600 flex items-center justify-center font-bold text-[#353026] dark:text-white text-[13px] shrink-0">
                                        {step.id}
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-2 lg:pr-8">
                                        <h3 className="font-bold text-[#353026] dark:text-white text-[16px]">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#64748b] dark:text-gray-400 text-[14px] leading-[1.6]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
                        <Image
                            src="/meditation.png"
                            alt="Meditation Waterfall"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />

                        {/* Glassmorphism Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[85%] max-w-[360px] bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-[24px] p-6 sm:p-8 shadow-2xl">
                            <h4 className="text-white font-bold text-[16px] mb-5 tracking-wide shadow-black/10 drop-shadow-sm">
                                Spiritual Energy Level
                            </h4>

                            <div className="mb-8">
                                <div className="h-2.5 w-full bg-white/30 dark:bg-white/20 rounded-full overflow-hidden mb-3 shadow-inner">
                                    <div className="h-full bg-gradient-to-r from-[#fae588] to-[#fad046] w-[70%] rounded-full shadow-[0_0_15px_rgba(250,208,70,0.8)]"></div>
                                </div>
                                <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-[0.15em] drop-shadow-sm">
                                    <span>Energy Balance</span>
                                    <span>Aligned</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-12 sm:gap-16">
                                <div>
                                    <p className="text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-[0.1em] mb-1.5 drop-shadow-sm">Inner Peace</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">92%</p>
                                </div>
                                <div>
                                    <p className="text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-[0.1em] mb-1.5 drop-shadow-sm">Stress</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">LOW</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
