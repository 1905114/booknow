"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
            { name: "Our Science", href: "#" }
        ]
    },
    {
        title: "Products",
        links: [
            { name: "Core Assessment", href: "#" },
            { name: "App Download", href: "#" },
            { name: "Supplements", href: "#" },
            { name: "For Clinics", href: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "HIPAA Compliance", href: "#" }
        ]
    }
]

const socialLinks = ["Twitter", "Instagram", "LinkedIn", "YouTube"]

export function Footer() {
    const pathname = usePathname()
    const isServicePage = pathname === "/services" || (pathname?.startsWith("/services/") && pathname.split("/").filter(Boolean).length === 2)

    if (isServicePage) return null;

    return (
        <footer className="bg-white dark:bg-black py-20 border-t border-gray-100 dark:border-zinc-900 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between mb-32 gap-16 lg:gap-8">

                    {/* Brand Info */}
                    <div className="w-full lg:w-[35%] space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-[#fad046] flex items-center justify-center text-[#353026]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18.178 8c5.096 0 5.096 8 0 8-5.096 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.643-8 12.739-8z"></path>
                                </svg>
                            </div>
                            <span className="text-[15px] font-bold text-[#111] dark:text-white tracking-widest uppercase">
                                AANMEGA BALA RATNA
                            </span>
                        </Link>
                        <p className="text-[#64748b] dark:text-gray-400 text-[13px] leading-[1.8] max-w-sm">
                            The world's first AI-driven longevity ecosystem.<br />
                            Science-backed, medical-grade, human-focused.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {footerLinks.map((column, i) => (
                            <div key={i} className="space-y-6 text-left">
                                <h4 className="text-[15px] font-bold text-[#111] dark:text-white">
                                    {column.title}
                                </h4>
                                <ul className="space-y-4">
                                    {column.links.map((link, j) => (
                                        <li key={j}>
                                            <Link href={link.href} className="text-[13px] text-[#64748b] dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-[12px] text-[#94a3b8] dark:text-gray-500 font-medium">
                    <p>
                        &copy; 2024 Longevity Health Systems. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, i) => (
                            <Link key={i} href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">
                                {social}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}
