import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "How is this different from a regular physical?",
        answer: "Traditional physicals look for sickness. We look for optimization. Our analysis covers 3,000+ biomarkers including cellular age, DNA health, and micronutrient status that standard tests simply ignore."
    },
    {
        question: "Is my data secure and private?",
        answer: "Yes, we use bank-level encryption and strict privacy protocols. Your data is never sold to third parties and is used exclusively to generate your personalized wellness protocols."
    },
    {
        question: "How often do I need to re-test?",
        answer: "We recommend re-testing every 6 months to track your progress and adjust your protocols as your body adapts and improves its energetic and physical baselines."
    },
    {
        question: "Do you ship internationally?",
        answer: "Currently, our deep-dive diagnostic kits are only available domestically. However, our digital sound therapy and online meditation consultations are accessible worldwide."
    }
]

export default function LandingFaq() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 max-w-3xl">

                {/* Register Now Button placed above FAQ */}
                <div className="flex justify-center mb-16">
                    <button className="bg-[#fad046] hover:bg-[#e6be3e] text-[#353026] font-bold text-[15px] py-[14px] px-10 rounded-full transition-all shadow-md hover:shadow-lg">
                        Register Now
                    </button>
                </div>

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#353026] dark:text-white tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-[#f8fafc] dark:bg-zinc-900 border-none rounded-[24px] px-6 sm:px-8"
                        >
                            <AccordionTrigger className="text-[15px] sm:text-[16px] font-bold text-[#0f172a] dark:text-white hover:no-underline py-6 text-left [&[data-state=open]>svg]:rotate-180">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#64748b] dark:text-gray-400 leading-[1.6] text-[14px] sm:text-[15px] pt-0 pb-6 pr-4 sm:pr-8">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    )
}
