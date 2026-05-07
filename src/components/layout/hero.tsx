"use client";

import { MoveRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/20">
                        <Sparkles className="mr-1 h-3.5 w-3.5" />
                        Discover Your Inner Peace
                    </div>
                </div>
                <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                    Start Your <span className="text-primary">Spiritual Journey</span> Today
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    {siteConfig.description} Explore ancient wisdom and modern practices to find balance in your life.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all">
                        Get Started <MoveRight className="h-4 w-4" />
                    </button>
                    <button className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                        Learn more <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>

            {/* Background blobs for premium look */}
            <div className="absolute top-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
                <div className="absolute right-[10%] bottom-[20%] h-80 w-80 rounded-full bg-secondary/30 blur-[100px]" />
            </div>
        </section>
    );
}
