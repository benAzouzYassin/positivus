import { cn } from "@/lib/utils";
import Analytics from "../svg/Ananlytics";
import ContentCreation from "../svg/ContentCreation";
import EmailAdds from "../svg/EmailAds";
import PerClickAdvertising from "../svg/PerCickAdvertising";
import Seo from "../svg/Seo";
import SocialMediaMarketing from "../svg/SocialMediaMarketing";
import ServiceActionBtn from "./serviceActionBtn";

export default function Services() {
  // const serviceRef = useRef(null);
  // const inView = useInView(serviceRef, {
  //   margin: "-100px",
  // });
  return (
    <section
      id="services"
      className="mt-10 pb-20 lg:px-[100px] md:px-[40px] px-4 "
    >
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Services
      </p>
      <div
        // ref={serviceRef}
        className="grid  md:gap-8 gap-5  md:grid-cols-2"
      >
        {/* seo card */}
        <div
          className={cn(
            " overflow-hidden group transition-all flex flex-col  duration-700 hover:scale-105   hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#F3F3F3] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-6 md:p-[50px]"
            // { "  -translate-x-0 opacity-100": inView }
          )}
        >
          <p className="text-[28px] text-center bg-[#B9FF66] rounded-lg w-fit font-medium px-2">
            Search engine
          </p>
          <p className="text-[28px] text-center bg-[#B9FF66] mt-1 rounded-lg w-fit font-medium px-2">
            optimization
          </p>
          <Seo className="absolute md:top-1/2 md:-translate-y-1/2 w-1/2 right-5 -bottom-6 md:right-10" />
          <div className="flex  gap-2 md:mt-16 mt-auto md:mb-0 mb-2 items-center">
            <ServiceActionBtn
              arrowColor="#B9FF66"
              className="group-hover:rotate-[30deg] h-16 md:w-auto md:h-auto w-16 transition-all"
              backgroundColor="#191A23"
            />
            <p className="text-[24px] font-medium hidden md:block">
              Learn more
            </p>
          </div>
        </div>

        {/* pay per click card */}
        <div className="group hover:scale-105 overflow-hidden flex flex-col transition-all duration-200   hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#B9FF66] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-6 md:p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Pay-per-click
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            advertising
          </p>
          <PerClickAdvertising className="absolute md:top-1/2 md:-translate-y-1/2 w-1/2 right-5 -bottom-6 md:right-10" />
          <div className="flex  gap-2 md:mt-16 mt-auto md:mb-0 mb-2 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all h-16 md:w-auto   md:h-auto w-16"
              arrowColor="#B9FF66"
              backgroundColor="#191A23"
            />
            <p className="text-[24px] font-medium hidden md:block">
              Learn more
            </p>
          </div>
        </div>
        {/* social media section */}
        <div className="group hover:scale-105 overflow-hidden flex flex-col transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#191A23] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-6 md:p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Social Media
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            Marketing
          </p>
          <SocialMediaMarketing className="absolute md:top-1/2 md:-translate-y-1/2 w-1/2 right-5 -bottom-6 md:right-10" />
          <div className="flex  gap-2 md:mt-16 mt-auto md:mb-0 mb-2 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all h-16 md:w-auto   md:h-auto w-16"
              arrowColor="#191A23"
              backgroundColor="white"
            />
            <p className="text-[24px] md:block hidden  text-white font-medium">
              Learn more
            </p>
          </div>
        </div>

        {/* email card */}
        <div className="group hover:scale-105 overflow-hidden flex flex-col transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#F3F3F3] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-6 md:p-[50px]">
          <p className="text-[28px] text-center bg-[#B9FF66] rounded-lg w-fit font-medium px-2">
            Email
          </p>
          <p className="text-[28px] text-center bg-[#B9FF66] mt-1 rounded-lg w-fit font-medium px-2">
            Marketing
          </p>
          <EmailAdds className="absolute md:top-1/2 md:-translate-y-1/2 w-1/2 right-5 -bottom-6 md:right-10" />
          <div className="flex  gap-2 md:mt-16 mt-auto md:mb-0 mb-2 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all h-16 md:w-auto   md:h-auto w-16"
              arrowColor="#B9FF66"
              backgroundColor="#191A23"
            />
            <p className="text-[24px] font-medium md:block hidden">
              Learn more
            </p>
          </div>
        </div>

        {/*content creation card */}
        <div className="group hover:scale-105 overflow-hidden flex flex-col transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#B9FF66] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-6 md:p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Content
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            Creation
          </p>
          <ContentCreation className="absolute md:top-1/2 md:-translate-y-1/2 w-1/2 right-5 -bottom-6 md:right-10" />
          <div className="flex  gap-2 md:mt-16 mt-auto md:mb-0 mb-2 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all h-16 md:w-auto   md:h-auto w-16"
              arrowColor="#B9FF66"
              backgroundColor="#191A23"
            />
            <p className="text-[24px]  font-medium md:block hidden">
              Learn more
            </p>
          </div>
        </div>

        {/* analytics card */}
        <div className="group hover:scale-105 overflow-hidden flex flex-col transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#191A23] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-6 md:p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Analytics and
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            Tracking
          </p>
          <Analytics className="absolute md:top-1/2 md:-translate-y-1/2 w-1/2 right-5 -bottom-6 md:right-10" />
          <div className="flex  gap-2 md:mt-16 mt-auto md:mb-0 mb-2 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all h-16 md:w-auto   md:h-auto w-16"
              arrowColor="#191A23"
              backgroundColor="white"
            />
            <p className="text-[24px] md:block hidden  text-white  font-medium">
              Learn more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
