import { Users, History, BadgeCheck } from "lucide-react"

export default function LandingStats() {
    return (
        <section className="pb-24 pt-10 md:pt-16 bg-white dark:bg-black w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Yellow Container */}
                <div className="w-full bg-[#fdf4ce] dark:bg-yellow-900/10 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-sm">

                    {/* Left Text */}
                    <div className="lg:w-1/3 xl:w-1/4 space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#353026] dark:text-white leading-[1.2]">
                            Why Choose Our<br className="hidden lg:block" /> Method?
                        </h2>
                        <p className="text-[#353026]/80 dark:text-gray-300 text-[14px] md:text-[15px] leading-[1.6]">
                            Our frequency-based healing integrates ancient wisdom with modern acoustics.
                        </p>
                    </div>

                    {/* Right Cards */}
                    <div className="lg:w-2/3 xl:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {/* Card 1 */}
                        <div className="bg-[#fad046] dark:bg-yellow-600 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm">
                            <div className="w-[44px] h-[44px] bg-white/40 dark:bg-white/20 rounded-full flex flex-col items-center justify-center mb-5">
                                <Users className="w-5 h-5 text-[#353026] dark:text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#353026] dark:text-white mb-2 tracking-tight">7500+</h3>
                            <p className="text-[11px] font-bold text-[#353026] dark:text-white uppercase tracking-wider leading-[1.4]">
                                Live Transformations<br /> Since 2004
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#fad046] dark:bg-yellow-600 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm">
                            <div className="w-[44px] h-[44px] bg-white/40 dark:bg-white/20 rounded-full flex flex-col items-center justify-center mb-5">
                                <History className="w-[18px] h-[18px] text-[#353026] dark:text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#353026] dark:text-white mb-2 tracking-tight">22</h3>
                            <p className="text-[11px] font-bold text-[#353026] dark:text-white uppercase tracking-wider leading-[1.4]">
                                Years of Research &<br /> Experience
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#fad046] dark:bg-yellow-600 rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden">
                            {/* Background icon */}
                            <BadgeCheck className="absolute -bottom-4 -right-4 w-24 h-24 text-[#f5c33a] dark:text-yellow-500/30" strokeWidth={1.5} />

                            <h3 className="text-3xl font-extrabold text-[#353026] dark:text-white mb-2 relative z-10 tracking-tight">10K+</h3>
                            <p className="text-[12px] font-bold text-[#353026] dark:text-white leading-[1.4] relative z-10">
                                Global Community<br /> Growing network of<br /> practitioners
                            </p>
                        </div>
                    </div>
                </div>

                {/* Register Now Button */}
                <div className="flex justify-center mt-12 mb-4">
                    <button className="bg-[#fad046] hover:bg-[#e6be3e] text-[#353026] font-bold text-[15px] py-[14px] px-10 rounded-full transition-all shadow-md hover:shadow-lg">
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    )
}
