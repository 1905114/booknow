"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/use-scroll";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, Infinity, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const scrolled = useScroll();
    const pathname = usePathname();
    const router = useRouter();
    const { language, setLanguage } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);
    const isHomePage = pathname === "/";
    const isLightPage = pathname?.includes("/checkout") || pathname?.includes("/success") || pathname?.includes("/booking") || pathname?.includes("/ta-booking") || pathname?.includes("/services");

    // Dynamic styles based on scroll state and page type
    const headerBgStyles = scrolled
        ? "bg-[#2b1f15]/85 backdrop-blur-2xl border border-white/10 shadow-2xl"
        : isLightPage
            ? "bg-white/40 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
            : "bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl";

    const mainTextColor = (isLightPage && !scrolled) ? "text-[#1a110a]" : "text-white";
    const navTextColor = (isLightPage && !scrolled) ? "text-[#1a110a]/80" : "text-white/90";
    const languageInactiveColor = (isLightPage && !scrolled) ? "text-[#1a110a]/40" : "text-white/40";
    const languageActiveColor = (isLightPage && !scrolled) ? "text-[#1a110a]" : "text-white";
    const dividerColor = (isLightPage && !scrolled) ? "text-black/10" : "text-white/20";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
            <div className={cn(
                "w-full max-w-[1200px] flex h-[74px] items-center justify-between px-6 sm:px-4 transition-all duration-500 rounded-full pointer-events-auto overflow-hidden",
                headerBgStyles
            )}>
                {/* Left Side: Hamburger and Logo grouped */}
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 min-w-0">
                    <button 
                        className={cn("lg:hidden p-2 flex-shrink-0", mainTextColor)}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-center relative">
                            <span className={cn("w-full h-0.5 bg-current transition-all duration-300", isMenuOpen ? "rotate-45 translate-y-2.5" : "")} />
                            <span className={cn("w-full h-0.5 bg-current transition-all duration-300", isMenuOpen ? "opacity-0" : "")} />
                            <span className={cn("w-full h-0.5 bg-current transition-all duration-300", isMenuOpen ? "-rotate-45 -translate-y-2" : "")} />
                        </div>
                    </button>

                    <Link href="/" className="flex items-center gap-2 group min-w-0">
                        <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] relative flex-shrink-0">
                            <Image 
                                src="/services/logo-1.svg" 
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className={cn(
                                "font-outfit font-extrabold tracking-tight hidden sm:block whitespace-nowrap text-[14px] sm:text-[16px] md:text-[18px] truncate",
                                mainTextColor
                            )}>
                                {language === "EN" ? "Sri Sidhi Vinaayagar" : "ஸ்ரீ சித்தி விநாயகர்"}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Center: Desktop Navigation - Hidden on Mobile */}
                <div className="hidden lg:flex items-center justify-center flex-1">
                    <nav className={cn(
                        "flex items-center gap-4 xl:gap-8 text-[15px] font-medium transition-colors duration-500",
                        navTextColor
                    )}>
                        {[
                            { name: language === "EN" ? "Home" : "முகப்பு", href: "/" },
                            { name: language === "EN" ? "Book your session" : "பிரிவுகள்", href: "/services" },
                            { name: language === "EN" ? "FAQ" : "கேள்விகள்", href: "/#faq" },
                            { name: language === "EN" ? "Contact" : "தொடர்பு", href: "/#profile" }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="transition-all hover:text-[#FBD037] relative group whitespace-nowrap"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right Actions: Language Switch, Register Button */}
                <div className="flex items-center justify-end gap-2 sm:gap-4 lg:gap-6 min-w-0 lg:flex-none lg:mr-0 mr-6 sm:mr-10">
                    <div className={cn(
                        "flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-wider flex-shrink",
                        (isLightPage && !scrolled) ? "border-black/5" : "border-white/10"
                    )}>
                        <button 
                            onClick={() => setLanguage("TN")}
                            className={cn(
                                "transition-all duration-300",
                                language === "TN" ? languageActiveColor + " font-extrabold" : languageInactiveColor + " font-medium"
                            )}
                        >
                            TAM
                        </button>
                        <span className={cn("font-light opacity-20", dividerColor)}>|</span>
                        <button 
                            onClick={() => setLanguage("EN")}
                            className={cn(
                                "transition-all duration-300",
                                language === "EN" ? languageActiveColor + " font-extrabold" : languageInactiveColor + " font-medium"
                            )}
                        >
                            ENG
                        </button>
                    </div>

                    <button 
                        onClick={() => {
                            router.push("/services");
                        }}
                        className={cn(
                            "flex h-9 sm:h-11 px-4 sm:px-6 rounded-full bg-[#FBD037] text-black transition-all duration-300 hover:scale-[1.03] shadow-lg items-center justify-center gap-2 group relative overflow-hidden active:scale-[0.98]",
                        )}
                    >
                        {/* Desktop-only Sparkle icon */}
                        <div className="hidden lg:block relative w-5 h-5 mr-1 flex-shrink-0 z-10">
                            <Image 
                                src="/glow.png" 
                                alt="sparkle"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-outfit font-bold relative z-10 whitespace-nowrap text-[12px] sm:text-[13px]">
                            <span className="lg:hidden">{language === "EN" ? "Register" : "பதிவு செய்க"}</span>
                            <span className="hidden lg:inline">{language === "EN" ? "Register Now" : "பதிவு செய்க"}</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none transition-transform duration-500" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className={cn(
                "fixed inset-x-4 top-24 z-[101] lg:hidden transition-all duration-500 origin-top pointer-events-auto",
                isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            )}>
                <div className="bg-[#2b1f15]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
                    {[
                        { name: language === "EN" ? "Home" : "முகப்பு", href: "/" },
                        { name: language === "EN" ? "Book your session" : "பிரிவுகள்", href: "/services" },
                        { name: language === "EN" ? "FAQ" : "கேள்விகள்", href: "/#faq" },
                        { name: language === "EN" ? "Contact" : "தொடர்பு", href: "/#profile" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white/90 text-lg font-medium py-2 border-b border-white/5 last:border-0"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-sm font-bold tracking-wider text-white/60">
                            <button onClick={() => setLanguage("TN")} className={cn(language === "TN" && "text-white")}>TAM</button>
                            <span className="opacity-40">|</span>
                            <button onClick={() => setLanguage("EN")} className={cn(language === "EN" && "text-white")}>ENG</button>
                        </div>
                        <button 
                            onClick={() => {
                                setIsMenuOpen(false);
                                router.push("/services");
                            }}
                            className="w-full h-12 rounded-2xl bg-[#FBD037] text-black font-bold flex items-center justify-center gap-2"
                        >
                            {language === "EN" ? "Register" : "பதிவு செய்க"}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
