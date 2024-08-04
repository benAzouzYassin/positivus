import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { cn } from "@/lib/utils";

export default function WorkingProcess() {
  const items = [
    {
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      content: "",
    },
    {
      title: "Implementation",
      content: "",
    },
    {
      title: "Monitoring and Optimization",
      content: "",
    },
    {
      title: "Reporting and Communication",
      content: "",
    },
    {
      title: "Continual Improvement",
      content: "",
    },
  ];
  const [activeItem, setActiveItem] = useState<string>();
  return (
    <section id="our-process" className="lg:px-[100px] md:px-[40px] px-4">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Our Working Process
      </p>

      <Accordion onValueChange={setActiveItem} type="single" collapsible>
        {items.map((item, i) => (
          <AccordionItem
            className={cn(
              "  mb-4 flex flex-col transition-all   justify-center px-4 md:px-10 min-h-[100px] rounded-[16px] border-x-2    border-t-2 border-b-[7px] border-black/70  ",
              {
                "bg-[#B9FF66] border-black/90": activeItem === item.title,
              }
            )}
            key={item.title}
            value={item.title}
          >
            <AccordionTrigger asChild>
              <div className=" group flex text-2xl hover:cursor-pointer font-medium  items-center  w-full">
                <span className="mr-2 font-bold">
                  {" "}
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="group-hover:border-opacity-100 text-[18px] font-bold line-clamp-1 md:line-clamp-none md:font-medium  md:text-3xl transition-all border-black border-b-2 border-opacity-0">
                  {item.title}
                </span>
                <span
                  className={cn(
                    " ml-auto rounded-full w-9 h-9 relative p-2 flex items-center justify-center border-2 border-black/70"
                  )}
                >
                  <span className=" h-[5px] absolute w-[70%] bg-zinc-500"></span>
                  <span
                    className={cn(
                      "w-[5px]  bg-zinc-500 rotate-180 transition-all h-[70%] absolute",
                      {
                        "rotate-90": activeItem == item.title,
                      }
                    )}
                  ></span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="min-h-10 font-medium text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
