import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  return (
    <section className="px-[100px] my-20">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Testimonials{" "}
      </p>
      <div className="h-[400px] p-[50px] rounded-[24px] bg-[#191A23]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnFocusIn: true,
            }),
          ]}
        >
          <CarouselContent className="gap-5 pr-[200px]">
            <CarouselItem className="basis-[550px]">
              <Item />
            </CarouselItem>
            <CarouselItem className="basis-[550px]">
              <Item />
            </CarouselItem>
            <CarouselItem className="basis-[550px]">
              <Item />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
function Item() {
  return (
    <div className="text-white">
      <div className="w-[500px] relative p-7 h-[220px]  text-white min-w-[300px] border-2 rounded-[24px]  border-[#B9FF66]">
        "We have been working with Positivus for the past year and have seen a
        significant increase in website traffic and leads as a result of their
        efforts. The team is professional, responsive, and truly cares about the
        success of our business. We highly recommend Positivus to any company
        looking to grow their online presence."
      </div>
      <p className="text-[#B9FF66] font-medium text-xl mt-3 ml-1">John Smith</p>
      <p className="ml-1">Marketing Director at XYZ Corp</p>
    </div>
  );
}

//TODO make the contact section
//TODO make the footer section
//TODO find good img for lets make things section
