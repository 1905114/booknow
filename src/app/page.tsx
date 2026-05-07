import LandingHero from "@/components/landing/landing-hero"
import LandingAbout from "@/components/landing/landing-about"
import LandingSessions from "@/components/landing/landing-sessions"
import LandingWellness from "@/components/landing/landing-wellness"
import LandingStats from "@/components/landing/landing-stats"
import LandingTestimonials from "@/components/landing/landing-testimonials"
import LandingDiscover from "@/components/landing/landing-discover"
import LandingChakras from "@/components/landing/landing-chakras"
import LandingFaq from "@/components/landing/landing-faq"
import LandingProfile from "@/components/landing/landing-profile"
import LandingCtaBanner from "@/components/landing/landing-cta-banner"

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FCFAF2]">
      {/* Sequence of sections to build the full spiritual landing page experience */}
      <LandingHero />
      <LandingAbout />
      <LandingSessions />
      <LandingWellness />
      <LandingStats />
      <LandingTestimonials />
      <LandingDiscover />
      <LandingChakras />
      <LandingFaq />
      <LandingProfile />
      <LandingCtaBanner />
    </div>
  )
}
