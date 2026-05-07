import { FlaskConical, Utensils, Zap, Brain } from "lucide-react"

const wellnessCards = [
    {
        title: "Diagnostic Intelligence",
        description: "Deep-dive blood and DNA analysis to identify markers of aging before they impact you.",
        icon: FlaskConical,
        color: "text-sky-500 bg-sky-50 dark:bg-sky-500/10",
    },
    {
        title: "Molecular Nutrition",
        description: "Custom nutrition protocols designed to optimize mitochondrial function and energy output.",
        icon: Utensils,
        color: "text-green-500 bg-green-50 dark:bg-green-500/10",
    },
    {
        title: "Energy Mastery",
        description: "Systemic protocols to eliminate brain fog and sustain high-performance energy all day.",
        icon: Zap,
        color: "text-amber-500 bg-amber-50 dark:bg-amber-500/10",
    },
    {
        title: "Cognitive Longevity",
        description: "Neuro-protective strategies to ensure your mind stays as sharp as your body as you age.",
        icon: Brain,
        color: "text-purple-500 bg-purple-50 dark:bg-purple-500/10",
    }
]

export default function LandingWellness() {
    return (
        <section className="pt-24 pb-10 md:pb-16 bg-white dark:bg-black w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#353026] dark:text-white leading-tight tracking-tight">
                        Wellness rooted in science for<br className="hidden sm:block" /> lasting energy and vitality.
                    </h2>
                    <p className="text-[#64748b] dark:text-gray-400 text-[15px] sm:text-[17px]">
                        What people say about their transformation journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wellnessCards.map((card, index) => (
                        <div key={index} className="flex flex-col items-start p-8 rounded-[32px] border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all">
                            <div className={`h-[52px] w-[52px] rounded-full flex items-center justify-center mb-6 ${card.color}`}>
                                <card.icon className="h-[24px] w-[24px]" strokeWidth={2} />
                            </div>
                            <h3 className="text-[18px] font-bold text-[#0f172a] dark:text-white mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[14px] text-[#64748b] dark:text-gray-400 leading-[1.6]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
