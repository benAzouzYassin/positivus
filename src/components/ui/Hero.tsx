import { useAnimation } from "framer-motion";
import BoxReveal from "./BoxReveal";
import { Button } from "./button";
import HeroSvg from "./HeroSvg";

export default function Hero() {
  const buttonAnimation = useAnimation();
  return (
    <section className="flex  mt-16 px-[100px] ">
      <div className="w-1/2 min-h-[500px] ">
        <BoxReveal boxColor="black">
          <p className="text-[60px] max-w-[600px] font-bold">Navigating the</p>
        </BoxReveal>
        <BoxReveal delay={0.2} boxColor="black">
          <p className="text-[60px] max-w-[600px] font-bold">
            digital landscape
          </p>
        </BoxReveal>
        <BoxReveal delay={0.4} boxColor="black">
          <p className="text-[60px] max-w-[600px] font-bold">for success</p>
        </BoxReveal>

        <p className="text-[20px] mt-2">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button
          onMouseEnter={() =>
            buttonAnimation.start({
              height: 60,
            })
          }
          onMouseLeave={() =>
            buttonAnimation.start({
              height: 0,
            })
          }
          className="relative overflow-hidden   group  mt-4  hover:bg-black hover:text-white transition-all group text-[16px]  rounded-lg h-[60px] w-[230px]"
        >
          <span className="z-50 group-hover:text-black transition-all ease-in-out ">
            Book a consultation
          </span>
          <div className=" h-0  group-hover:h-[60px] group-hover:border-black group-hover:rounded-b-lg border-2 opacity-0 group-hover:opacity-100  rounded-t-lg absolute top-0 transition-all duration-300 border-white   w-[230px] bg-white flex  items-center justify-center   "></div>
        </Button>
      </div>
      <div className=" flex  items-center justify-center w-1/2">
        <HeroSvg />
      </div>
    </section>
  );
}
