"use client";

import * as React from "react";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            {/* Add your context providers here (e.g., ThemeProvider, QueryClientProvider) */}
            {children}
        </LanguageProvider>
    );
}
