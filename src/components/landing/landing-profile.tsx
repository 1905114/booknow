import Image from "next/image"
import { BadgeCheck, Landmark, Lock, Globe, TrendingUp } from "lucide-react"

const expertise = [
    { text: "21 Years of Consistent Practice", icon: BadgeCheck },
    { text: "Ethical & Structured Spiritual Methods", icon: Landmark },
    { text: "Confidential One-to-One Consultation", icon: Lock },
    { text: "International Client Experience", icon: Globe },
    { text: "Practical Remedies with Clear Direction", icon: TrendingUp }
]

export default function LandingProfile() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Avatar Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden bg-gray-100 dark:bg-zinc-900 rounded-none object-cover w-full">
                            <Image
                                src="/Expert consultation.png"
                                alt="Expert Consultation"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">

                        <div className="space-y-4">
                            <p className="text-[11px] font-bold text-[#94a3b8] dark:text-gray-400 uppercase tracking-[0.2em]">
                                EXPERT CONSULTATION
                            </p>
                            <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-bold text-[#353026] dark:text-white leading-[1.1] tracking-tight">
                                Experience. Integrity.<br /> Results.
                            </h2>
                            <p className="text-[#f5a524] dark:text-yellow-500 font-bold text-[17px]">
                                Serving Since 2004.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {expertise.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <item.icon className="h-[18px] w-[18px] text-[#2e7d32] dark:text-green-500 shrink-0" strokeWidth={2} />
                                    <span className="text-[14px] font-medium text-[#0f172a] dark:text-gray-200 leading-snug">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="border-l-2 border-gray-200 dark:border-zinc-800 pl-6 py-1 my-8">
                            <p className="text-[#64748b] dark:text-gray-400 text-[16px] italic leading-relaxed font-medium">
                                "My goal is not dependency — My goal is alignment<br className="hidden lg:block" /> and forward movement."
                            </p>
                        </div>

                        <div className="pt-2">
                            <button className="bg-[#fad046] hover:bg-[#e6be3e] text-[#353026] font-bold text-[14px] py-[14px] px-8 rounded-full transition-all shadow-sm hover:shadow-md uppercase tracking-wide">
                                Schedule a Consultation
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
