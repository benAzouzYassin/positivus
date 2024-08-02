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
    <section className="mt-10 pb-20 px-[100px] ">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Services
      </p>
      <div
        // ref={serviceRef}
        className="grid  gap-8  grid-cols-2"
      >
        {/* seo card */}
        <div
          className={cn(
            "group transition-all  duration-700 hover:scale-105   hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#F3F3F3] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-[50px]"
            // { "  -translate-x-0 opacity-100": inView }
          )}
        >
          <p className="text-[28px] text-center bg-[#B9FF66] rounded-lg w-fit font-medium px-2">
            Search engine
          </p>
          <p className="text-[28px] text-center bg-[#B9FF66] mt-1 rounded-lg w-fit font-medium px-2">
            optimization
          </p>
          <Seo className="absolute top-1/2 -translate-y-1/2 right-10" />
          <div className="flex  gap-2 mt-16 items-center">
            <ServiceActionBtn
              arrowColor="#B9FF66"
              className="group-hover:rotate-[30deg] transition-all"
              backgroundColor="#191A23"
            />
            <p className="text-[24px] font-medium">Learn more</p>
          </div>
        </div>

        {/* pay per click card */}
        <div className="group hover:scale-105 transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#B9FF66] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Pay-per-click
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            advertising
          </p>
          <PerClickAdvertising className="absolute top-1/2 -translate-y-1/2 right-10" />
          <div className="flex gap-2 mt-16 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all"
              arrowColor="#B9FF66"
              backgroundColor="#191A23"
            />
            <p className="text-[24px]  font-medium">Learn more</p>
          </div>
        </div>
        {/* social media section */}
        <div className="group hover:scale-105 transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#191A23] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Social Media
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            Marketing
          </p>
          <SocialMediaMarketing className="absolute top-1/2 -translate-y-1/2 right-10" />
          <div className="flex gap-2 mt-16 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all"
              arrowColor="#191A23"
              backgroundColor="white"
            />
            <p className="text-[24px]  text-white font-medium">Learn more</p>
          </div>
        </div>

        {/* email card */}
        <div className="group hover:scale-105 transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#F3F3F3] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-[50px]">
          <p className="text-[28px] text-center bg-[#B9FF66] rounded-lg w-fit font-medium px-2">
            Email
          </p>
          <p className="text-[28px] text-center bg-[#B9FF66] mt-1 rounded-lg w-fit font-medium px-2">
            Marketing
          </p>
          <EmailAdds className="absolute top-1/2 -translate-y-1/2 right-10" />
          <div className="flex gap-2 mt-16 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all"
              arrowColor="#B9FF66"
              backgroundColor="#191A23"
            />
            <p className="text-[24px] font-medium">Learn more</p>
          </div>
        </div>

        {/*content creation card */}
        <div className="group hover:scale-105 transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#B9FF66] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Content
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            Creation
          </p>
          <ContentCreation className="absolute top-1/2 -translate-y-1/2 right-10" />
          <div className="flex gap-2 mt-16 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all"
              arrowColor="#B9FF66"
              backgroundColor="#191A23"
            />
            <p className="text-[24px]  font-medium">Learn more</p>
          </div>
        </div>

        {/* analytics card */}
        <div className="group hover:scale-105 transition-all duration-200  hover:cursor-pointer active:scale-100 relative rounded-[32px] bg-[#191A23] h-[320px] border-x-2 border-t-2 border-b-8 border-black/70 p-[50px]">
          <p className="text-[28px] text-center bg-white rounded-lg w-fit font-medium px-2">
            Analytics and
          </p>
          <p className="text-[28px] text-center bg-white mt-1 rounded-lg w-fit font-medium px-2">
            Tracking
          </p>
          <Analytics className="absolute top-1/2 -translate-y-1/2 right-10" />
          <div className="flex gap-2 mt-16 items-center">
            <ServiceActionBtn
              className="group-hover:rotate-[30deg] transition-all"
              arrowColor="#191A23"
              backgroundColor="white"
            />
            <p className="text-[24px]  text-white  font-medium">Learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
