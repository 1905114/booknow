import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/config/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF2] pt-[104px] pb-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="pt-10 mb-16">
          <div className="flex justify-start mb-8">
            <span className="font-outfit text-[16px] font-bold leading-[20px] tracking-[1.4px] text-[#4E4633B2] uppercase block w-[89px] h-[20px]">
              SERVICES
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="font-outfit text-[40px] font-bold leading-[40px] tracking-[0px] text-[#231C01] text-center mb-4 w-full max-w-[1216px] mx-auto">
              Book your Session
            </h1>
            <p className="font-outfit text-[18px] font-normal leading-[24px] tracking-[0px] text-[#616161] text-center max-w-[1232px] mx-auto">
              What people say about their transformation journey.
            </p>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="w-full max-w-[968px] mx-auto pt-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
