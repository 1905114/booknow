import { XCircle, CheckCircle2 } from "lucide-react"

const beforeJoining = [
    "Guided chakra sound meditation experience",
    "Calming sound frequencies and breathing practices",
    "Peaceful environment for relaxation and awareness",
    "Helps participants explore mindfulness and inner balance",
    "Simple techniques suitable for beginners",
    "Supportive spiritual learning atmosphere"
]

const afterJoining = [
    "Spiritual practice established in 2004",
    "Over two decades of meditation and sound practice",
    "Structured and ethical spiritual guidance",
    "Private one-to-one consultation available",
    "Experience working with participants internationally",
    "Practical guidance for personal spiritual development"
]

export default function LandingChakras() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Headers */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#353026] dark:text-white leading-tight">
                        Chakra Sound & Meditation Experience
                    </h2>
                    <p className="text-[#64748b] dark:text-gray-400 text-[15px] sm:text-[17px]">
                        A guided sound and meditation experience for relaxation and inner balance.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">

                    {/* Before Joining */}
                    <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-8 md:p-12 border border-red-50 dark:border-red-900/30 shadow-[0_4px_40px_-10px_rgba(254,202,202,0.6)] dark:shadow-[0_4px_40px_-10px_rgba(239,68,68,0.1)] relative overflow-hidden">

                        {/* Soft red glow */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-red-50/50 dark:bg-red-900/10 blur-[60px] rounded-full pointer-events-none -z-10" />

                        <div className="mb-10">
                            <span className="bg-red-50 dark:bg-red-950/50 text-[#f46060] dark:text-red-400 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest inline-block">
                                BEFORE JOINING
                            </span>
                        </div>

                        <ul className="space-y-7">
                            {beforeJoining.map((item, i) => (
                                <li key={i} className="flex items-start gap-5">
                                    <XCircle className="w-[22px] h-[22px] text-[#f46060] shrink-0 mt-0.5" fill="currentColor" stroke="white" strokeWidth={2} />
                                    <span className="text-[#64748b] dark:text-gray-400" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: '18px', lineHeight: '29.25px', letterSpacing: '0px' }}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After Joining */}
                    <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-8 md:p-12 border border-emerald-50 dark:border-emerald-900/30 shadow-[0_4px_40px_-10px_rgba(167,243,208,0.6)] dark:shadow-[0_4px_40px_-10px_rgba(16,185,129,0.1)] relative overflow-hidden">

                        {/* Soft green glow */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1ab07e]/10 dark:bg-[#1ab07e]/5 blur-[80px] rounded-full pointer-events-none -z-10" />

                        <div className="mb-10">
                            <span className="bg-[#1ab07e] text-white px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest inline-block shadow-sm">
                                AFTER JOINING
                            </span>
                        </div>

                        <ul className="space-y-7">
                            {afterJoining.map((item, i) => (
                                <li key={i} className="flex items-start gap-5">
                                    <CheckCircle2 className="w-[22px] h-[22px] text-[#1ab07e] shrink-0 mt-0.5" fill="currentColor" stroke="white" strokeWidth={2} />
                                    <span className="text-[#353026] dark:text-white" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: '18px', lineHeight: '29.25px', letterSpacing: '0px' }}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}
