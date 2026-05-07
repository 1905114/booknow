import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description?: string;
  features?: string[];
  price: string;
  imageSrc: string;
  slug?: string;
  mostPopular?: boolean;
  imageClassName?: string;
  className?: string;
  hideDetails?: boolean;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  features,
  price,
  imageSrc,
  slug,
  mostPopular,
  imageClassName,
  className,
  hideDetails = false,
  index = 0,
}: ServiceCardProps) {
  // Define card-specific overrides
  const isCardOne = index === 0;
  const isCardTwo = index === 1;
  const isCardThree = index === 2;
  const isCardFour = index === 3;
  const isCardFive = index === 4;
  const isCardSix = index === 5;
  const isCardRest = index >= 6; // Master template for Card 7 and beyond

  // Title section height and padding
  let titleClasses = "leading-[1.2] tracking-tight text-[20px] font-semibold text-[#1A1A1A] mb-[8px] flex items-center w-full";
  if (isCardOne || isCardTwo || isCardThree) {
    titleClasses = cn(titleClasses, "min-h-[38px]");
  } else if (isCardFour || isCardFive || isCardSix || isCardRest) {
    titleClasses = cn(titleClasses, "min-h-[60px]");
  }

  // Description section height and padding
  let descContainerClasses = "h-auto mb-[4px] w-full";
  if (isCardOne) {
    descContainerClasses = "min-h-[95px] mb-[12px] w-full overflow-hidden";
  } else if (isCardTwo || isCardThree) {
    descContainerClasses = "min-h-[76px] mb-[12px] w-full overflow-hidden";
  }

  // Footer container (Price + Button)
  let footerClasses = "flex flex-col justify-center mb-0 mt-auto w-full h-auto";
  let footerGap = "gap-2";
  if (isCardOne) {
    footerClasses = "flex flex-col mt-auto w-full h-auto min-h-[105px]";
    footerGap = "gap-[21px]";
  } else if (isCardTwo) {
    footerClasses = "flex flex-col mt-auto w-full h-auto min-h-[114px]";
    footerGap = "gap-[30px]";
  } else if (isCardThree) {
    footerClasses = "flex flex-col mt-auto w-full h-auto min-h-[106px]";
    footerGap = "gap-[22px]";
  } else if (isCardFour) {
    footerClasses = "flex flex-col mt-auto w-full h-auto min-h-[110px]";
    footerGap = "gap-[21px]";
  } else if (isCardFive) {
    footerClasses = "flex flex-col mt-auto w-full h-auto min-h-[114px]";
    footerGap = "gap-[20px]";
  } else if (isCardSix || isCardRest) {
    footerClasses = "flex flex-col mt-auto w-full h-auto min-h-[105px]";
    footerGap = "gap-[21px]";
  }

  return (
    <div 
      className={cn(
        "flex flex-col rounded-[32px] overflow-hidden bg-[#FDF2B5] h-auto min-h-[474px] gap-0 relative w-full max-w-[340px] mx-auto", 
        className
      )}
      style={{
        boxShadow: '0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Image Section */}
      {!hideDetails && (
        <div className="relative h-[192px] w-full p-0">
          {mostPopular && index !== 1 && (
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-[#1A1A1A] text-[#FDF2B5] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Most Popular
              </span>
            </div>
          )}
          <div className="relative w-full h-full overflow-hidden">
            {imageSrc ? (
              <div className="relative w-full h-full">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Layer */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)'
                  }}
                />
                {/* Overlay Layer */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'rgba(253, 242, 181, 0.1)',
                    mixBlendMode: 'color' as any
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-full bg-yellow-100/50 flex items-center justify-center">
                <span className="text-yellow-600/50">No image</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className={cn(
        "flex flex-col gap-0 h-auto min-h-[282px] px-6 pt-6 pb-6 w-full",
        hideDetails ? "" : ""
      )}>
        {!hideDetails && (
          <h3 className={titleClasses}>
            {title}
          </h3>
        )}

        {!hideDetails && (
          <>
            <div className={descContainerClasses}>
              {description && (
                <p className="m-0 text-[13.6px] leading-[19px] text-[#333333] font-normal whitespace-pre-line">
                  {description}
                </p>
              )}
              {features && features.length > 0 && (
                <ul className="m-0 p-0 pl-1 list-none flex flex-col gap-1">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13.6px] leading-[19px] text-[#333333] font-normal">
                      <span className="mt-[7.5px] w-1 h-1 rounded-full bg-[#333333] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={cn(footerClasses, footerGap)}>
              <div className={cn(
                "flex items-baseline gap-2 w-full h-auto min-h-[40px]"
              )}>
                <span className={cn(
                  "whitespace-nowrap flex items-center text-[18px] md:text-[20px] font-semibold text-[#333333] leading-[28px] w-auto h-auto"
                )}>
                  {price === "₹1599" ? "Consultation:" : "Special Offer:"}
                </span>
                <span className={cn(
                  "flex items-center text-[22px] md:text-[24px] font-bold text-[#333333] leading-[1.2] w-auto h-auto"
                )}>
                  {price}
                </span>
              </div>

              <div className={cn("flex justify-center w-full", isCardOne || isCardTwo || isCardThree || isCardRest ? "" : "mt-auto")}>
                <Button
                  className={cn(
                    "h-[44px] bg-[#FFD541] hover:bg-[#FFC700] text-gray-900 font-bold rounded-full text-[14px] shadow-sm transition-all duration-300 py-3 font-sans w-full"
                  )}
                  style={{ fontFamily: 'Liberation Sans, sans-serif' }}
                  asChild
                >
                  <Link href={`/services/${slug || ""}`}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
