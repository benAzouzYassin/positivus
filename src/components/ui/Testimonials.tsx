import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/testimonials";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  return (
    <motion.section className="px-[100px] my-20">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Testimonials{" "}
      </p>
      <div className="h-[400px] p-[50px] rounded-[24px] bg-[#191A23]">
        <Carousel>
          <CarouselContent className="gap-5">
            {testimonials.map((item, i) => (
              <CarouselItem key={i} className="basis-[550px]">
                <Item {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
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
  return (
    <motion.div ref={target} style={{ x }} className="text-white">
      <div className="w-[500px] relative p-7 h-[220px]  text-white min-w-[300px] border-2 rounded-[24px]  border-[#B9FF66]">
        "{content}"
      </div>
      <p className="text-[#B9FF66] font-medium text-xl mt-3 ml-1">
        {clientName}
      </p>
      <p className="ml-1">{clientTitle}</p>
    </motion.div>
  );
}
