import { useAnimation } from "framer-motion";
import BoxReveal from "./BoxReveal";
import { Button } from "./button";
import HeroSvg from "./HeroSvg";

export default function Hero() {
  const buttonAnimation = useAnimation();
  return (
    <section className="flex md:flex-row  flex-col lg:mt-16  xl:px-[100px] px-4 md:px-[40px] ">
      <div className="md:w-1/2 w-full  min-h-[500px] ">
        <div className=" w-full mt-20 lg:block hidden lg:mt-0 ">
          <BoxReveal boxColor="black">
            <p className="lg:text-[60px]   lg:max-w-[600px] font-bold">
              Navigating the
            </p>
          </BoxReveal>
          <BoxReveal delay={0.2} boxColor="black">
            <p className="lg:text-[60px]  pt-1  lg:max-w-[600px] font-bold">
              digital landscape
            </p>
          </BoxReveal>
          <BoxReveal delay={0.4} boxColor="black">
            <p className="lg:text-[60px]  pt-1  lg:max-w-[600px] font-bold">
              for success
            </p>
          </BoxReveal>
        </div>
        <p className="md:text-[55px] text-[40px]  lg:hidden mt-0 md:mt-6 font-bold text-center md:text-left">
          Navigating the digital landscape for success
        </p>
        <HeroSvg className="w-[90vw] md:hidden h-[300px] mt-0 " />

        <p className="md:text-[20px] md:mt-2 md w-full">
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
          className="relative overflow-hidden   group  mt-4  hover:bg-black hover:text-white transition-all group text-[16px]  rounded-lg h-[60px] w-full md:w-[230px]"
        >
          <span className="z-50 group-hover:text-black transition-all ease-in-out ">
            Book a consultation
          </span>
          <div className=" h-0  group-hover:h-[60px] group-hover:border-black group-hover:rounded-b-lg border-2 opacity-0 group-hover:opacity-100  rounded-t-lg absolute top-0 transition-all duration-300 border-white   w-[230px] bg-white flex  items-center justify-center   "></div>
        </Button>
      </div>
      <div className=" flex  items-center justify-center w-1/2">
        <HeroSvg className="hidden md:block" />
      </div>
    </section>
  );
}
