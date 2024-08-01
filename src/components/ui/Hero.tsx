import { Button } from "./button";
import HeroSvg from "./HeroSvg";

export default function Hero() {
  return (
    <section className="flex  mt-16 px-[100px] ">
      <div className="w-1/2 min-h-[500px] ">
        <p className="text-[60px] max-w-[600px] font-bold">
          Navigating the digital landscape for success
        </p>
        <p className="text-[20px] mt-2">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="px-7 mt-4 rounded-lg h-[55px]">
          Book a consultation
        </Button>
      </div>
      <div className=" flex  items-center justify-center w-1/2">
        <HeroSvg />
      </div>
    </section>
  );
}
