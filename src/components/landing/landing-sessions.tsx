import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const sessions = [
    {
        image: "/services/mantra_healing.png",
        heartColor: "text-[#6B4DFF]", // Bright purple heart
        heartBg: "bg-[#25155C]/90", // Dark purple circle
        mostPopular: false,
    },
    {
        image: "/services/one_on_one_session.png",
        heartColor: "text-[#00E5A3]", // Glowing teal heart
        heartBg: "bg-[#023328]/90", // Dark teal circle
        mostPopular: true,
    },
    {
        image: "/services/home_energy_cleansing.png",
        heartColor: "text-[#00E5A3]", // Glowing teal heart
        heartBg: "bg-[#42221C]/90", // Dark red/brown circle
        mostPopular: true,
    }
]

export default function LandingSessions() {
    return (
        <section id="section" className="py-24 bg-white">
            <div className="container px-4 md:px-6 lg:max-w-[1350px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#2a1b11]">
                        Book your Session
                    </h2>
                    <p className="text-[#6b625a] text-lg sm:text-xl font-medium">
                        What people say about their transformation journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {sessions.map((session, index) => (
                        <div key={index} className="overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:-translate-y-2 duration-300 bg-[#FFF3CD] rounded-[2.5rem]">
                            {/* Image Header */}
                            <div className="relative h-[250px] sm:h-[300px] w-full shrink-0 overflow-hidden">
                                <Image
                                    src={session.image}
                                    alt="Session Image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />

                                {/* Heart overlay button */}
                                <div className={`absolute top-6 left-6 h-12 w-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/5 ${session.heartBg}`}>
                                    <Heart className={`h-5 w-5 ${session.heartColor}`} strokeWidth={2.5} />
                                </div>

                                {/* Glowing Most Popular Badge */}
                                {session.mostPopular && (
                                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[#00E5A3] text-white text-[11px] font-extrabold shadow-[0_0_30px_rgba(0,229,163,0.8)] border border-[#00E5A3] tracking-[0.1em]">
                                        MOST POPULAR
                                    </div>
                                )}
                            </div>

                            {/* Content Body */}
                            <div className="flex flex-col flex-1 p-8 sm:p-10">
                                <h3 className="text-[28px] font-extrabold text-[#2a1b11]">Auto Writing</h3>
                                <p className="text-[15px] text-[#2a1b11]/80 mt-3 font-semibold leading-relaxed">
                                    Emotional balance, unconditional love, and inner peace restoration.
                                </p>

                                <div className="mt-8">
                                    <p className="text-[15px] font-extrabold text-[#2a1b11]">Sat, 11 Oct to Mon, 15 Oct</p>
                                    <p className="text-[15px] text-[#2a1b11]/80 mt-1.5 font-semibold">3:00PM | 3 Hours</p>
                                </div>

                                <ul className="space-y-4 mt-8 mb-10 flex-1">
                                    {[
                                        "Emotional closure & clarity",
                                        "Guidance from higher spiritual intelligence",
                                        "Interpretation of symbolic messages",
                                        "Private and confidential sessions"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[15px] text-[#2a1b11] font-semibold">
                                            <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#2a1b11] shrink-0" />
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full h-14 rounded-full bg-[#FFC700] hover:bg-[#E5B300] text-[#2a1b11] font-extrabold text-[17px] shadow-sm transition-all">
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
