import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreens";
import { testimonials } from "@/testimonials";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  return (
    <motion.section id="testimonials" className="lg:px-[100px] px-4 my-20">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Testimonials{" "}
      </p>
      <div className="md:h-[400px] h-fit  lg:p-[50px] rounded-[24px] bg-[#191A23]">
        <Carousel>
          <CarouselContent className="gap-5">
            {testimonials.map((item, i) => (
              <CarouselItem key={i} className="md:basis-[550px]">
                <Item {...item} />
              </CarouselItem>
            ))}
            {testimonials.map((item, i) => (
              <CarouselItem
                key={i + item.clientTitle}
                className="md:basis-[550px]"
              >
                <Item {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" disabled:opacity-70 bottom-0 md:hidden bg-neutral-100  -translate-y-10 -left-4   " />
          <CarouselNext className=" disabled:opacity-70 bottom-0  md:hidden  bg-neutral-100 -translate-y-10 -right-4 " />
        </Carousel>
      </div>
    </motion.section>
  );
}

type ItemProps = {
  clientName: string;
  content: string;
  clientTitle: string;
};
function Item({ clientName, clientTitle, content }: ItemProps) {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-500, 150]);
  const isMobile = useIsSmallScreen(768);
  return (
    <motion.div
      ref={target}
      style={{ x: isMobile ? undefined : x }}
      className="text-white px-4 py-8 md:px-0 md:pt-0"
    >
      <div className="md:w-[500px] w-full relative  p-7 md:h-[220px]  text-white min-w-[300px] border-2 rounded-[24px]  border-[#B9FF66]">
        "{content}"
      </div>
      <p className="text-[#B9FF66] font-medium text-xl mt-3 ml-1">
        {clientName}
      </p>
      <p className="ml-1">{clientTitle}</p>
    </motion.div>
  );
}
