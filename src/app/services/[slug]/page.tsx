import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/config/services";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Star, MapPin, Plus, Volume2, User, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Determine if it's one of the specialized layouts
  const isSpecialLayout = false;

  // Standardized groups for specific styling overrides
  const GOLD_STANDARD_SLUGS = ['mantra-healing', 'mantra-water-healing', 'negative-energy-cleansing', 'auto-writing-program', 'deep-energy-cleansing', 'negative-influence-removal', 'children-memory-improvement', 'business-energy-alignment', 'meditation-for-pregnant-women', 'home-energy-cleansing', 'meditation-program', 'one-on-one-session'];
  const LONG_FORM_SLUGS = ['deep-energy-cleansing', 'negative-influence-removal', 'children-memory-improvement', 'business-energy-alignment', 'meditation-for-pregnant-women', 'meditation-program', 'one-on-one-session', 'auto-writing-program', 'negative-energy-cleansing', 'home-energy-cleansing', 'mantra-healing', 'mantra-water-healing'];

  return (
    <main 
      className="bg-[#FCFAF2] pb-20 mx-auto overflow-x-hidden w-full max-w-[1440px] pt-[128px]"
    >
      {/* ─── BREADCRUMB NAVIGATION ─── */}
      <nav 
        className="w-full flex items-center gap-[8px] mx-auto px-4 md:px-12 lg:px-[67px] my-10 h-5"
      >
        <a 
          href="/services" 
          className="font-outfit font-bold uppercase text-[16px] leading-[20px] tracking-[1.4px] text-[#4E4633B2] w-auto h-5 shrink-0"
        >
          Services
        </a>
        
        {/* Separator Icon */}
        <div 
          className="flex items-center justify-center"
          style={{ width: '3.7px', height: '6px' }}
        >
          <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L3 3L1 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <span 
          className="font-outfit font-bold uppercase truncate text-[16px] leading-[20px] tracking-[1.4px] text-[#4E4633]"
        >
          {service.slug === 'mantra-healing' 
            ? "Manthra healing - Ancient Sound Energy" 
            : service.title}
        </span>
      </nav>

      <div 
        className="w-full mx-auto max-w-[1280px] min-h-[819px] px-4 md:px-8 lg:px-[64px] py-16"
      >
        <div 
          className={isSpecialLayout ? "flex flex-col gap-[64px] items-center w-full mx-auto" : "grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start w-full"}
          style={isSpecialLayout ? { maxWidth: '1054px' } : {}}
        >
          {/* Left Column: Image + Gallery Thumbnails */}
          <div className="flex flex-col gap-[32px] w-full lg:w-[552px]">
            <div 
              className={cn(
                "relative w-full overflow-hidden shadow-2xl shrink-0 mx-auto rounded-[31px]",
                LONG_FORM_SLUGS.includes(service.slug) ? "h-[500px] md:h-[850px]" : "h-[350px] md:h-[552px]"
              )}
            >
              <Image
                src={service.gallery?.[0] || service.detailImageSrc || service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Gallery Thumbnails */}
            <div className="flex gap-[16px] md:gap-[24px] w-full overflow-x-auto pb-4 md:pb-0 h-auto">
              {(service.gallery || [service.imageSrc, service.imageSrc, service.imageSrc]).slice(1, 4).map((img, i) => (
                <div 
                  key={i}
                  className="relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#F5C518] transition-all shrink-0 w-[100px] h-[100px] md:w-[152px] md:h-[152px] rounded-[20px]"
                >
                  <Image
                    src={img}
                    alt={`${service.title} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div 
            className="flex flex-col mx-auto w-full lg:w-[552px] gap-6"
          >
            {/* Badges */}
            {(service.detailFeatures || service.features) && (service.detailFeatures || service.features)!.length > 0 && (
              <div 
                className="flex flex-wrap items-center gap-3 w-full h-auto" 
              >
                {(service.detailFeatures || service.features)!.map((feature, i) => (
                  <div 
                    key={i} 
                    className="rounded-full flex items-center justify-center whitespace-nowrap"
                    style={{ 
                      height: '24px', 
                      background: '#EAE7E7',
                      padding: '4px 16px',
                      width: 'auto'
                    }}
                  >
                    <span className="font-outfit font-bold uppercase text-[#4E4633] text-[12px] tracking-[0.6px] leading-[16px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Heading */}
            <h1 
              className={cn(
                "font-outfit font-semibold text-[#1C1B1B] text-[28px] md:text-[36px] leading-[1.2] md:leading-[60px] w-full",
                LONG_FORM_SLUGS.includes(service.slug) ? "mb-0" : (service.slug === 'mantra-healing' ? "mb-4" : (['mantra-water-healing', 'negative-energy-cleansing'].includes(service.slug) ? "mb-6" : "mb-0"))
              )}
            >
              {service.detailTitle || service.title}
            </h1>



            {/* Description Block */}
            <div 
              className={cn(
                "p-0 flex flex-col w-full opacity-100",
                GOLD_STANDARD_SLUGS.includes(service.slug) ? "mb-6" : "mb-0"
              )}
            >
              <p 
                className={cn(
                  "font-outfit font-normal whitespace-pre-line",
                  LONG_FORM_SLUGS.includes(service.slug) ? "text-[#333333]" : "text-[#4E4633]"
                )}
                style={{ 
                  fontSize: '18px', 
                  lineHeight: GOLD_STANDARD_SLUGS.includes(service.slug) ? '26px' : '24px', 
                  letterSpacing: '0px' 
                }}
              >
                {service.fullDescription || service.description}
              </p>
            </div>

            {/* Price and Booking Section */}
            {![''].includes(service.slug) && (
              <div 
                className="flex flex-col w-full h-auto gap-6 opacity-100 mb-6"
              >
                {/* Top Section: Program Fee and Amount */}
                <div 
                  className="flex flex-col w-full h-auto pt-4 gap-1 opacity-100"
                >
                  <div 
                    className="flex flex-col w-full max-w-[137px] h-auto gap-1"
                  >
                    <span 
                      className="font-outfit font-bold uppercase text-[#4E4633]/60 text-[12px] leading-[16px] tracking-[2.4px] w-full" 
                    >
                      {['negative-influence-removal', 'children-memory-improvement', 'deep-energy-cleansing', 'business-energy-alignment', 'home-energy-cleansing', 'meditation-for-pregnant-women'].includes(service.slug) ? 'Consultation Fee' : 'Program Fee'}
                    </span>
                    <span 
                      className={cn(
                        "font-outfit font-semibold text-[#1C1B1B] text-[28px] md:text-[36px] leading-[1.2] md:leading-[40px] tracking-[-0.9px] w-auto h-auto",
                        ['negative-influence-removal', 'children-memory-improvement', 'deep-energy-cleansing', 'business-energy-alignment', 'home-energy-cleansing', 'meditation-for-pregnant-women'].includes(service.slug) ? "mt-3" : "mt-0"
                      )}
                    >
                      {service.detailPrice || service.price}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Button and Special Offer */}
                <div 
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full h-auto" 
                >
                  <Button 
                    className="hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-200/50 flex items-center justify-center rounded-full bg-[#F5C518] px-10 h-[60px] w-full sm:w-auto"
                  >
                    <span 
                      className="font-outfit font-bold text-[#695200] text-center text-[18px] leading-[28px]" 
                    >
                      Book Now
                    </span>
                  </Button>
                  {!['negative-influence-removal', 'children-memory-improvement', 'deep-energy-cleansing', 'business-energy-alignment', 'home-energy-cleansing'].includes(service.slug) && (
                    <span 
                      className="font-outfit font-bold uppercase text-[#745B00] text-[12px] leading-[16px] tracking-[0.6px] w-auto h-auto" 
                    >
                      Special Offer
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Note Content Renderer */}
            {(() => {
              const renderNoteContent = (content: string, isLongForm: boolean, fontSize: string = '18px') => {
                if (!content) return null;
                
                const lines = content.split('\n');
                let inList = false;
                const elements: React.ReactNode[] = [];
                let currentListItems: React.ReactNode[] = [];

                lines.forEach((line, i) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.startsWith('*')) {
                    inList = true;
                    currentListItems.push(
                      <li key={`li-${i}`} className="flex items-start gap-3 mt-2">
                        <div className="flex items-center justify-center pt-2 w-5 h-5 shrink-0">
                          <div className="rounded-full bg-[#4E4633] w-2 h-2" />
                        </div>
                        <span 
                          className="font-outfit font-bold text-[#4E4633] leading-[26px]"
                          style={{ fontSize }}
                        >
                          {trimmedLine.substring(1).trim()}
                        </span>
                      </li>
                    );
                  } else {
                    if (inList) {
                      elements.push(<ul key={`ul-${i}`} className="flex flex-col mb-4">{currentListItems}</ul>);
                      currentListItems = [];
                      inList = false;
                    }
                    elements.push(
                      <p 
                        key={i} 
                        className="font-outfit font-bold whitespace-pre-line text-[#4E4633]"
                        style={{ fontSize, lineHeight: '26px', marginBottom: trimmedLine === "" ? "0px" : "8px" }}
                      >
                        {line}
                      </p>
                    );
                  }
                });

                if (inList) {
                  elements.push(<ul key="ul-final" className="flex flex-col mb-4">{currentListItems}</ul>);
                }

                return elements;
              };

              return (
                <>
                  {/* Note Block */}
                  {service.note && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-0"
                    >
                      {renderNoteContent(service.note, LONG_FORM_SLUGS.includes(service.slug))}
                    </div>
                  )}

                  {/* Secondary Note Block */}
                  {service.secondaryNote && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-6"
                    >
                      {renderNoteContent(service.secondaryNote, LONG_FORM_SLUGS.includes(service.slug))}
                    </div>
                  )}

                  {/* Tertiary Note Block */}
                  {service.tertiaryNote && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-6"
                    >
                      {renderNoteContent(service.tertiaryNote, LONG_FORM_SLUGS.includes(service.slug), LONG_FORM_SLUGS.includes(service.slug) ? '16px' : '18px')}
                    </div>
                  )}

                  {/* Quaternary Note Block */}
                  {service.quaternaryNote && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-6"
                    >
                      {renderNoteContent(service.quaternaryNote, LONG_FORM_SLUGS.includes(service.slug))}
                    </div>
                  )}

                  {/* Quinary Note Block */}
                  {service.quinaryNote && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-6"
                    >
                      {renderNoteContent(service.quinaryNote, false)}
                    </div>
                  )}

                  {/* Final Note Block */}
                  {service.finalNote && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-6"
                    >
                      {renderNoteContent(service.finalNote, LONG_FORM_SLUGS.includes(service.slug), '16px')}
                    </div>
                  )}

                  {/* Traditional Note Block (About the Tradition) */}
                  {service.traditionalNote && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-3"
                    >
                      {renderNoteContent(service.traditionalNote, LONG_FORM_SLUGS.includes(service.slug), '16px')}
                    </div>
                  )}

                  {service.howItWorks && (
                    <div 
                      className="p-0 flex flex-col w-full h-auto opacity-100 mt-3"
                    >
                      {renderNoteContent(service.howItWorks, LONG_FORM_SLUGS.includes(service.slug), '16px')}
                    </div>
                  )}
                </>
              );
            })()}

            {/* Receive Points List */}
            {service.receivePoints && service.receivePoints.length > 0 && (
              <div 
                className="flex flex-col w-full h-auto gap-3"
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-full">
                  {service.receivePoints.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 w-full h-auto min-h-[52px]"
                    >
                      {/* Bullet Dot */}
                      <div className="flex items-center justify-center pt-2 w-5 h-5 shrink-0">
                        {GOLD_STANDARD_SLUGS.includes(service.slug) ? (
                          <div className="rounded-full bg-[#4E4633] w-2 h-2" />
                        ) : (
                          <div className="rounded-full bg-[#1C1B1B] w-2 h-2" />
                        )}
                      </div>
                      
                      {/* Item Text */}
                      <span 
                        className="font-outfit font-medium text-[#333333] text-[16px] leading-[24px] flex-1"
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Special Applications Block */}
            {service.specialApplications && (
              <div 
                className={cn(
                  "p-0 flex flex-col w-full h-auto opacity-100",
                  LONG_FORM_SLUGS.includes(service.slug) ? "mt-3" : "mt-6"
                )}
              >
                <p 
                  className="font-outfit font-bold text-[#4E4633] whitespace-pre-line text-[16px] leading-[26px]"
                >
                  {service.specialApplications}
                </p>
              </div>
            )}

            {/* How It Works Block */}
            {service.howItWorks && (
              <div 
                className="p-0 flex flex-col w-full h-auto pt-6 opacity-100"
              >
                <p 
                  className="font-outfit font-bold text-[#4E4633] whitespace-pre-line"
                  style={{ fontSize: '16px', lineHeight: '26px', letterSpacing: '0px' }}
                >
                  {service.howItWorks}
                </p>
              </div>
            )}

            {/* Connect With Us Section */}
            {!service.finalNote && !LONG_FORM_SLUGS.includes(service.slug) && (
              <div 
                className={cn("flex flex-col w-full h-auto opacity-100", GOLD_STANDARD_SLUGS.includes(service.slug) ? "pt-16" : "pt-8")}
              >
                <div className="w-full h-px bg-gray-200 mb-4" />
                
                <div className="flex flex-col gap-4">
                  {/* Final Thought */}
                  <div className="flex flex-col">
                    <h3 className="font-outfit font-bold text-[#4E4633] mb-2" style={{ fontSize: '16px', lineHeight: '26px' }}>
                      {GOLD_STANDARD_SLUGS.includes(service.slug) ? "🙏 Final Thought" : "Final Thought"}
                    </h3>
                    <p 
                      className="font-outfit font-bold text-[#4E4633]"
                      style={{ fontSize: '16px', lineHeight: '26px', letterSpacing: '0px' }}
                    >
                      {service.slug === 'mantra-healing' 
                        ? "Mantra Healing is not just chanting—it is a connection to higher intelligence and inner power. With the right guidance and practice, it can become a strong support system for navigating life’s challenges with clarity and strength."
                        : service.slug === 'mantra-water-healing'
                        ? "Mantra Water Healing is a simple yet powerful way to bring healing into everyday life. With consistent practice, it can gently transform your energy, mindset, and life situations."
                        : service.slug === 'meditation-program'
                        ? "Meditation is a powerful journey of self-discovery and inner silence. By quieting the mind, you unlock a deeper connection to your inner strength and clarity, allowing you to navigate life’s journey with peace and purpose."
                        : "Experience the transformative power of spiritual energy. If you have questions or wish to begin your journey, we are here to guide you."}
                    </p>
                  </div>

                  <p className="font-outfit font-bold text-[#4E4633] opacity-40">⸻</p>

                  {/* Connect With Us */}
                  <div className="flex flex-col">
                    <h3 className="font-outfit font-bold text-[#4E4633] mb-2" style={{ fontSize: '16px', lineHeight: '26px' }}>
                      {GOLD_STANDARD_SLUGS.includes(service.slug) ? "📞 Connect With Us" : "Connect With Us"}
                    </h3>
                    <div className="flex flex-col">
                      <p className="font-outfit font-bold text-[#4E4633]" style={{ fontSize: '16px', lineHeight: '26px' }}>
                        Sri Sidhi VINAAYAGAR Meditation Academy
                      </p>
                      <p className="font-outfit font-bold text-[#4E4633]" style={{ fontSize: '16px', lineHeight: '26px' }}>
                        {GOLD_STANDARD_SLUGS.includes(service.slug) ? "📱 9585044188" : "9585044188"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── ABOUT THE PRACTICE SECTION ─── */}
      { (service.aboutPractice || service.quote) && (
        <div 
          className="w-full flex justify-center mx-auto bg-[#F6F3F2] py-16 px-4 md:px-12 lg:px-[64px] h-auto"
        >
          <div 
            className="flex flex-col lg:flex-row items-start w-full max-w-[1312px] gap-12 lg:gap-[64px] opacity-100 h-auto"
          >
            {/* Left Container: About & Benefits Grid */}
            <div 
              className="flex flex-col w-full lg:w-[624px] h-auto gap-8 lg:gap-12"
            >
              <h2 
                className="font-outfit font-semibold text-[#1C1B1B] text-[28px] md:text-[36px] leading-[1.2] md:leading-[46px] tracking-[0] w-full"
              >
                {GOLD_STANDARD_SLUGS.includes(service.slug) 
                  ? `About the Practice — ${service.title}`
                  : "About the Practice"}
              </h2>

              <div 
                className="flex flex-col justify-center w-full h-auto bg-transparent p-0 rounded-0 opacity-100"
              >
                <p 
                  className={cn(
                    "font-outfit text-[#4E4633]",
                    service.slug === 'auto-writing-program' ? "font-medium" : "font-normal"
                  )}
                  style={{ 
                    fontSize: '16px', 
                    lineHeight: '24px', 
                    letterSpacing: '0px'
                  }}
                >
                  {service.slug === 'auto-writing-program'
                    ? "For a long time people have used writing as a way to connect with inner wisdom and guidance. Now you can also learn this simple method and experience it yourself."
                    : service.aboutPractice}
                </p>
              </div>

              {/* Benefits Grid (2x2) */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-auto opacity-100"
              >
                {service.slug && ( (
                  service.slug === 'mantra-healing'
                  ? [
                      "Daily protection n positivity", 
                      "Financial growth", 
                      "Blockage removal", 
                      "Childrens memory and Focus"
                    ]
                  : service.slug === 'mantra-water-healing'
                  ? [
                      "Physical energy restoration",
                      "Emotional stress relief",
                      "Negative energy clearing",
                      "Spiritual protection and focus"
                    ]
                  : service.slug === 'deep-energy-cleansing'
                  ? [
                      "Clears heavy or negative energy influence.", 
                      "Creates a sense of peace and grounding.", 
                      "Improves overall energy and vitality.", 
                      "Strengthens personal energy protection."
                    ]
                  : service.slug === 'negative-influence-removal'
                  ? [
                      "Business and career stability",
                      "Peaceful home environment",
                      "Emotional balance and relationships",
                      "Better focus and decision-making"
                    ]
                  : (['negative-energy-cleansing', 'auto-writing-program'].includes(service.slug))
                  ? [
                      "Improves mental clarity and focus", 
                      "Enhances physical energy and well-being", 
                      "Brings emotional balance and peace", 
                      "Supports financial and career growth"
                    ]
                  : service.slug === 'children-memory-improvement'
                  ? [
                      "Increased interest in studies",
                      "Higher confidence and clarity",
                      "Reduced stress and exam fear",
                      "Positive thinking and emotional balance"
                    ]
                  : service.slug === 'business-energy-alignment'
                  ? [
                      "Deep relaxation and inner peace",
                      "Positive thinking and reduced anxiety",
                      "Strong emotional connection with the baby",
                      "Improved sleep and mental calmness"
                    ]
                  : service.slug === 'meditation-for-pregnant-women'
                  ? [
                      "Deep relaxation and inner peace",
                      "Positive thinking and reduced anxiety",
                      "Strong emotional connection with the baby",
                      "Improved sleep and mental calmness"
                    ]
                  : service.slug === 'meditation-program'
                  ? [
                      "Inner Peace & Stress Relief", 
                      "Mental Clarity & Focus", 
                      "Emotional Balance & Stability", 
                      "Spiritual Growth & Awareness"
                    ]
                  : service.slug === 'one-on-one-session'
                  ? [
                      "Personalized Nature Analysis",
                      "Practical Spiritual Remedies",
                      "Life Direction & Clarity",
                      "Energy Blockage Resolution"
                    ]
                  : service.slug === 'auto-writing-program'
                  ? [
                      "Inner Wisdom & Intuition",
                      "Emotional Release & Healing",
                      "Subconscious Flow & Clarity",
                      "Spiritual Guidance & Support"
                    ]
                  : service.slug === 'home-energy-cleansing'
                  ? [
                      "Peaceful Home Sanctuary",
                      "Family Harmony & Alignment",
                      "Restful Sleep & Vitality",
                      "Energetic Shield & Protection"
                    ]
                  : [
                      "Daily protection n positivity", 
                      "Financial growth", 
                      "Blockage removal", 
                      "Childrens memory and Focus"
                    ]
                ).map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 w-full sm:w-[261.5px] h-auto min-h-[24px]"
                  >
                    {(GOLD_STANDARD_SLUGS.includes(service.slug)) ? (
                      <div 
                        className="flex items-center justify-center w-5 h-5 shrink-0" 
                      >
                        <img 
                          src="/services/check-icon.png" 
                          alt="Check" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="rounded-full bg-[#1C1B1B] w-2 h-2 shrink-0" />
                    )}
                    <span 
                      className="font-outfit font-semibold text-[#1C1B1B] text-[16px] leading-[24px]"
                    >
                      {item}
                    </span>
                  </div>
                 )))}
              </div>
            </div>

            {/* Right Container: Quote Section */}
            {service.quote && (
              <div 
                className="relative flex flex-col items-center justify-center w-full max-w-[624px] h-auto min-h-[254px] rounded-[32px] border-[1px] border-dashed border-[#D1C5AC] bg-white p-8"
              >
                <div 
                  className="flex flex-col items-start w-full gap-2"
                >
                  {/* Quote Icon */}
                  <div 
                    className="flex items-center justify-center rounded-[4px] w-[42.5px] h-[30px] bg-[#F5C51866]"
                  >
                    <img 
                      src="/services/Icon.png" 
                      alt="Quote" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Quote Text */}
                  <div 
                    className="flex items-center justify-center text-center w-full h-auto"
                  >
                    <p 
                      className={cn(
                        "font-outfit text-[20px] md:text-[24px] leading-[1.4] md:leading-[32px] font-medium text-center w-full",
                        GOLD_STANDARD_SLUGS.includes(service.slug) ? "text-[#745B00]" : "text-[#4E4633]"
                      )}
                    >
                      {service.quote}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── VIDEO EMBED SECTION (Hear From Our Community) ─── */}
      <div 
        className="w-full mx-auto flex items-center justify-center bg-white py-16 md:py-24 h-auto opacity-100 px-4"
      >
        <div 
          className="flex flex-col items-center w-full max-w-[1054px] gap-8 opacity-100 h-auto"
        >
          {/* Hear From (Heading Block) */}
          <div 
            className="flex flex-col items-center w-full h-auto gap-2 opacity-100"
          >
            {/* Heading */}
            <div 
              className="flex justify-center w-full h-auto opacity-100"
            >
                <h2 
                  className="font-outfit font-semibold text-[28px] md:text-[36px] leading-[1.1] md:leading-[40px] tracking-[-0.9px] text-center text-[#1C1B1B]"
                >
                Hear From Our Community
              </h2>
            </div>
            
            {/* Sub-heading */}
            <div 
              className="flex justify-center w-full h-auto opacity-70"
            >
              <p 
                className="font-outfit font-medium text-[16px] leading-[24px] text-center text-[#4E4633]"
              >
                Real people, real transformations.
              </p>
            </div>
          </div>

          {/* Video Container */}
          <div 
            className={cn(
              "relative rounded-[32px] overflow-hidden group cursor-pointer bg-gray-100 w-full opacity-100",
              GOLD_STANDARD_SLUGS.includes(service.slug) ? "h-auto shadow-none" : "h-[300px] md:h-[504px] shadow-[0px_4px_23.6px_0px_#00000030]"
            )}
          >
            {GOLD_STANDARD_SLUGS.includes(service.slug) ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[32px] w-full h-auto">
                {/* Reel 1 */}
                <div className="relative rounded-[20px] overflow-hidden bg-black/10 w-full aspect-[9/16] md:h-[644.72px]">
                  <Image src="/services/Reel 1 (1).png" alt="Reel 1" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#745B00] border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                {/* Reel 2 */}
                <div className="relative rounded-[20px] overflow-hidden bg-black/10 w-full aspect-[9/16] md:h-[644.72px]">
                  <Image src="/services/Reel 4.png" alt="Reel 2" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#745B00] border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                {/* Reel 3 */}
                <div className="relative rounded-[20px] overflow-hidden bg-black/10 w-full aspect-[9/16] md:h-[644.72px]">
                  <Image src="/services/Overlay (1).png" alt="Reel 3" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#745B00] border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Community Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-[24px] w-full h-full"
              ></iframe>
            )}
          </div>
        </div>
      </div>

      {/* ─── FAQ SECTION ─── */}
      {service.faqs && service.faqs.length > 0 && (
        <div 
          className="w-full mx-auto flex flex-col items-center py-16 md:py-24 bg-[#F6F3F2] opacity-100 px-4"
        >
          <div 
            className="flex flex-col items-center gap-10 w-full max-w-[1054px] opacity-100"
          >
            {/* FAQ Heading Frame */}
            <div 
              className="flex flex-col items-center gap-3 w-full max-w-[768px] h-auto opacity-100"
            >
              <h2 
                className="font-outfit font-semibold text-[28px] md:text-[36px] leading-[1.1] md:leading-[40px] tracking-[-0.9px] text-center text-[#1C1B1B] w-full max-w-[662px]"
              >
                Frequently Asked Questions
              </h2>
              <p 
                className="font-outfit font-medium text-[16px] leading-[24px] text-[#4E4633] opacity-70 text-center w-full max-w-[246.95px]"
              >
                Real people, real transformations.
              </p>
            </div>

            {/* Q&A Container */}
            <Accordion type="single" collapsible className="flex flex-col gap-4 w-full max-w-[768px]">
              {service.faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="bg-[#FCF9F8] border border-[#D1C5AC4D] rounded-[32px] px-6 overflow-hidden w-full min-h-[76px]"
                >
                  <AccordionTrigger 
                    className="hover:no-underline py-6 gap-3 group w-full"
                  >
                    <div className="flex justify-between items-center w-full">
                      <span 
                        className="font-outfit font-semibold text-[#1C1B1B] text-left text-[16px] leading-[24px]"
                      >
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="font-outfit font-medium text-[#838383] pb-6 text-[16px] leading-[24px] w-full"
                  >
                    <div className="whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {/* ─── RATING & REVIEW SECTION ─── */}
      {service.testimonials && service.testimonials.length > 0 && (
        <div 
          className="w-full flex justify-center mx-auto bg-white py-16 md:py-24 px-4 md:px-8 lg:px-[64px] h-auto opacity-100"
        >
          <div 
            className="flex flex-col items-center gap-10 w-full max-w-[1312px] opacity-100 h-auto"
          >
            {/* Real People Frame (Heading Block) */}
            <div 
              className="flex flex-col items-center gap-3 w-full h-auto opacity-100"
            >
              <h2 
                className="font-outfit font-semibold text-[28px] md:text-[36px] leading-[1.1] md:leading-[40px] tracking-[-0.9px] text-center text-[#1C1B1B] w-full max-w-[738.3px]"
              >
                Real People, Real Results, Real Transformation
              </h2>
              <p 
                className="font-outfit font-medium text-[16px] leading-[24px] text-[#4E4633] opacity-70 text-center w-full max-w-[246.95px]"
              >
                Real people, real transformations.
              </p>
            </div>

            {/* Testimonial Container (Grid) */}
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-auto opacity-100"
            >
              {service.testimonials.slice(0, 3).map((testi, i) => (
                <div 
                  key={i}
                  className="relative p-8 bg-[#FCF9F8] border border-[#D1C5AC] rounded-[32px] w-full h-auto min-h-[258px] shadow-[0px_2px_12.3px_0px_#00000012] opacity-100"
                >
                  {/* Name/Avatar/Stars (Top Block) */}
                  <div className="flex items-center gap-[16px] w-full h-[64px]">
                    {/* Avatar Overlay */}
                    <div 
                      className="rounded-full flex items-center justify-center overflow-hidden"
                      style={{ width: '64px', height: '64px', background: 'rgba(245, 197, 24, 0.1)' }}
                    >
                      <div className="font-outfit font-bold text-[#745B00] text-[20px]">{testi.name[0]}</div>
                    </div>
                    
                    <div className="flex flex-col justify-center h-[35.08px]">
                      <span 
                        className="font-outfit font-bold text-[#1C1B1B]"
                        style={{ fontSize: '14px', lineHeight: '24px', height: '24px' }}
                      >
                        {testi.name}
                      </span>
                      {/* Star Individual Row */}
                      <div className="flex gap-[0.5px] h-[11.08px]">
                        {[...Array(5)].map((_, starI) => (
                          <Star key={starI} className="fill-[#F5C518] text-[#F5C518]" style={{ width: '11.67px', height: '11.08px' }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="mt-[24px] w-full h-[72px]">
                    <p 
                      className="font-outfit font-medium text-[#4E4633] line-clamp-3"
                      style={{ fontSize: '16px', lineHeight: '24px' }}
                    >
                      &ldquo;{testi.text}&rdquo;
                    </p>
                  </div>

                  {/* Location Section */}
                  <div 
                    className="absolute bottom-[33px] left-[33px] flex items-center gap-[4px] opacity-60"
                  >
                    <MapPin style={{ width: '8px', height: '10px' }} className="text-[#4E4633]" />
                    <span 
                      className="font-outfit font-medium text-[#4E4633]"
                      style={{ fontSize: '12px' }}
                    >
                      {testi.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Your Review Button */}
            <div className="flex justify-center mt-12 w-full">
              <Button 
                className="hover:scale-105 active:scale-95 transition-all flex items-center justify-center rounded-full bg-[#F5C518] px-10 h-[60px] w-full sm:w-auto shadow-lg shadow-yellow-200/50"
              >
                <div 
                  className="flex items-center justify-center gap-1 w-auto h-7 opacity-100"
                >
                  <Plus className="w-7 h-7 text-[#231C01]" />
                  <span 
                    className="font-outfit font-bold text-[#231C01] text-[18px] leading-[28px] text-center"
                  >
                    Add your Review
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ─── FOOTER SECTION ─── */}
      <footer 
        className="w-full flex justify-center items-center mt-24 bg-[#FDF2B5] border-t border-[#C6C6CD] py-16 h-auto opacity-100"
      >
        <div 
          className="flex flex-col lg:flex-row w-full max-w-[1440px] gap-12 px-6 md:px-12 opacity-100 h-auto"
        >
          {/* Brand Section */}
          <div 
            className="flex flex-col gap-6 w-full lg:w-[317.75px] h-auto opacity-100"
          >
            <div className="h-auto">
              <span 
                className="font-inter font-bold text-black text-[24px] leading-[31.2px]"
              >
                BalaMaya
              </span>
            </div>
            <div className="h-auto">
              <p 
                className="font-inter font-normal text-[#3F3F3F] text-[16px] leading-[24px]"
              >
                Empowering enterprise teams with precision-engineered tools and
                sophisticated visual experiences.
              </p>
            </div>
            <div className="flex flex-row gap-3 pt-2 h-12">
              <div className="flex items-center justify-center bg-transparent border border-black/10 w-10 h-10 rounded-xl">
                <Volume2 className="w-[17px] h-4 text-black" />
              </div>
              <div className="flex items-center justify-center bg-transparent border border-black/10 w-10 h-10 rounded-xl">
                <User className="w-[17px] h-4 text-black" />
              </div>
              <div className="flex items-center justify-center bg-transparent border border-black/10 w-10 h-10 rounded-xl">
                <Globe className="w-[17px] h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div 
            className="flex flex-col gap-6 w-full lg:w-[317.75px] h-auto opacity-100"
          >
            <h4 
              className="font-inter font-bold text-black uppercase text-[14px] leading-[19.6px] tracking-[0.7px]"
            >
              PRODUCTS
            </h4>
            <div className="flex flex-col gap-3 h-auto">
              {['Home', 'Service', 'FAQ'].map((item) => (
                <div key={item} className="h-6 py-1">
                  <span 
                    className="font-inter font-medium text-[#3F3F3F] text-[14px] leading-[19.6px] tracking-[0.14px]"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div 
            className="flex flex-col gap-6 w-full lg:w-[317.75px] h-auto opacity-100"
          >
            <h4 
              className="font-inter font-bold text-black uppercase text-[14px] leading-[19.6px] tracking-[0.7px]"
            >
              COMPANY
            </h4>
            <div className="flex flex-col gap-3 h-auto">
              <div className="h-6 py-1">
                <span 
                  className="font-inter font-medium text-[#3F3F3F] text-[14px] leading-[19.6px] tracking-[0.14px]"
                >
                  Contact
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription Column */}
          <div 
            className="flex flex-col gap-6 w-full lg:w-[317.75px] h-auto opacity-100"
          >
            <h4 
              className="font-inter font-bold text-black uppercase text-[14px] leading-[19.6px] tracking-[0.7px]"
            >
              SUBSCRIBE
            </h4>
            <div className="h-auto opacity-80">
              <p 
                className="font-inter font-normal text-[#3F3F3F] text-[16px] leading-[24px]"
              >
                Get the latest enterprise insights directly in your inbox.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}