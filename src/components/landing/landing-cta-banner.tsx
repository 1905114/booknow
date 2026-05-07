import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import GreenGradientBlobs from "@/components/GreenGradientBlobs"

export default function LandingCtaBanner() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">

                {/* Book Consultation Banner */}
                <div className="relative w-full rounded-[40px] bg-[#fad046] dark:bg-yellow-600 overflow-hidden shadow-sm flex flex-col items-center justify-center text-center p-12 sm:p-20 border border-yellow-200 dark:border-yellow-700">

                    <GreenGradientBlobs />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#c6a32d] shadow-inner rounded-full flex items-center justify-center mb-6">
                            <Image src="/Icon.png" alt="Yoga Icon" width={24} height={24} className="object-contain" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] dark:text-white mb-3 tracking-tight">
                            BOOK YOUR CONSULTATION
                        </h2>
                        <p className="text-[#111] dark:text-white/90 text-[14px] font-medium mb-8">
                            Deep dive into your personal energy blueprint with a 1-on-1 session.
                        </p>
                        <button className="bg-[#fefce8] hover:bg-white text-[#111] font-bold text-[14px] py-[14px] px-8 rounded-full transition-all flex items-center gap-3 shadow-md hover:shadow-lg">
                            Check Availability <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* WhatsApp Inner Circle Banner */}
                <div className="relative w-full rounded-[40px] bg-[#edfcf1] dark:bg-green-950/20 border border-green-100 dark:border-green-900/40 overflow-hidden shadow-sm flex flex-col lg:flex-row items-center p-8 sm:p-12 lg:p-16 xl:px-20 gap-12 lg:gap-24">

                    {/* Faded Background Icon */}
                    <MessageCircle className="absolute top-8 right-12 w-32 h-32 text-green-100 dark:text-green-900/40 pointer-events-none" strokeWidth={1.5} />

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-1.5 bg-[#dcfce7] dark:bg-green-900/60 text-[#16a34a] dark:text-green-400 px-4 py-2 rounded-full text-[11px] font-bold mb-8">
                            {/* WhatsApp SVG Icon */}
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372C5.9 8.274 5.058 9.068 5.058 10.68c0 1.612 1.066 3.172 1.214 3.37.149.198 2.298 3.508 5.57 4.935 2.062.898 3.17.9 4.316.818 1.26-.09 2.85-1.164 3.245-2.289.395-1.124.395-2.083.273-2.289-.122-.198-.446-.322-.743-.471zM11.97 22A9.957 9.957 0 0 1 6.84 20.6l-.37-.22-3.8.99 1.01-3.7-.24-.38A9.972 9.972 0 0 1 1.99 12C1.99 6.48 6.48 2 12 2s10.01 4.48 10.01 10-4.48 10-10.01 10zM12 0C5.373 0 0 5.373 0 12c0 2.112.553 4.103 1.516 5.86L0 24l6.3-1.654A11.936 11.936 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
                            <span>Exclusive Community</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0f172a] dark:text-white mb-6 leading-tight tracking-tight">
                            Join Our Inner Circle
                        </h2>

                        <p className="text-[#475569] dark:text-gray-400 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-10 lg:pr-10">
                            Experience exclusive spiritual insights, daily affirmations, and direct access to our experts by joining our private WhatsApp community.
                        </p>

                        <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-[14px] py-[14px] px-8 rounded-[12px] transition-all flex items-center gap-2.5 shadow-md hover:shadow-lg">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372C5.9 8.274 5.058 9.068 5.058 10.68c0 1.612 1.066 3.172 1.214 3.37.149.198 2.298 3.508 5.57 4.935 2.062.898 3.17.9 4.316.818 1.26-.09 2.85-1.164 3.245-2.289.395-1.124.395-2.083.273-2.289-.122-.198-.446-.322-.743-.471zM11.97 22A9.957 9.957 0 0 1 6.84 20.6l-.37-.22-3.8.99 1.01-3.7-.24-.38A9.972 9.972 0 0 1 1.99 12C1.99 6.48 6.48 2 12 2s10.01 4.48 10.01 10-4.48 10-10.01 10zM12 0C5.373 0 0 5.373 0 12c0 2.112.553 4.103 1.516 5.86L0 24l6.3-1.654A11.936 11.936 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
                            Join WhatsApp Community
                        </button>
                    </div>

                    {/* Right Content - Chat Mockup */}
                    <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
                        <div className="bg-white dark:bg-zinc-800 rounded-[28px] p-6 shadow-xl w-full max-w-sm border border-gray-100 dark:border-zinc-700">
                            {/* Chat Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#ffedd5] dark:bg-orange-900/40 text-[#ea580c] dark:text-orange-400 flex items-center justify-center font-bold text-sm">
                                    ZH
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[14px] font-bold text-[#0f172a] dark:text-white leading-tight mb-0.5">Zeal Healing Circle</h4>
                                    <p className="text-[11px] font-medium text-[#94a3b8] dark:text-gray-400">2,410 members • Online</p>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="space-y-4">
                                <div className="bg-[#f8fafc] dark:bg-zinc-900 text-[#475569] dark:text-gray-300 text-[12px] p-4 rounded-2xl rounded-tl-sm w-[85%] font-medium leading-[1.6] border border-gray-50 dark:border-zinc-800">
                                    Good morning everyone! Today's affirmation: "I am a vessel of peace." ✨
                                </div>
                                <div className="flex justify-end">
                                    <div className="bg-[#ffedd5] dark:bg-orange-900/40 text-[#ea580c] dark:text-orange-400 text-[12px] p-4 rounded-2xl rounded-tr-sm w-[80%] font-medium leading-[1.6]">
                                        Joining now! Thank you for the guidance.
                                    </div>
                                </div>
                                <div className="bg-[#f8fafc] dark:bg-zinc-900 text-[#475569] dark:text-gray-300 text-[12px] p-4 rounded-2xl rounded-tl-sm w-[90%] font-medium leading-[1.6] border border-gray-50 dark:border-zinc-800">
                                    Check out the new meditation session uploaded to the portal!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
