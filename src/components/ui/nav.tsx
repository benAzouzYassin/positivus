import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Logo from "../svg/Logo";
import { Button } from "./button";

export default function Nav() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !isScrolled) {
      setIsScrolled(true);
    }
    if (latest < 100 && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <nav className={cn("pt-[40px]  flex items-center transition-all", {})}>
      <div
        className={cn(
          "w-full flex transition-all  items-center md:px-[40px] px-4 xl:px-[100px] left-0 bg-white z-50",
          {
            "top-0 md:fixed md:px-[90px] border-b shadow-md h-[100px] w-full transition-all  ":
              isScrolled,
          }
        )}
      >
        <Logo className="scale-[80%] -translate-x-5 -translate-y-5 md:scale-100" />
        <ul className="ml-auto hidden  text-[20px] items-center lg:flex gap-6">
          {/* <li className="group hover:cursor-pointer ">
            <span>About</span>
            <div className="w-0 group-hover:w-3/4  transition-all h-[2px]  bg-black/70"></div>
          </li> */}
          <li className="group hover:cursor-pointer active:scale-95 transition-transform">
            <a href="#services">
              Services
              <div className="w-0 group-hover:w-3/4  transition-all h-[2px]  bg-black/70"></div>
            </a>
          </li>
          <li className="group hover:cursor-pointer active:scale-95 transition-transform">
            <a href="#case-studies">
              Cases
              <div className="w-0 group-hover:w-3/4  transition-all h-[2px]  bg-black/70"></div>
            </a>
          </li>
          <li className="group hover:cursor-pointer active:scale-95 transition-transform">
            <a href="#our-process">
              Our process
              <div className="w-0 group-hover:w-3/4  transition-all h-[2px]  bg-black/70"></div>
            </a>
          </li>
          <li className="group hover:cursor-pointer active:scale-95 transition-transform">
            <a href="#testimonials">
              Testimonials
              <div className="w-0 group-hover:w-3/4  transition-all h-[2px]  bg-black/70"></div>
            </a>
          </li>
          <li className="group hover:cursor-pointer active:scale-95 transition-transform">
            <a href="#contact">
              Contact
              <div className="w-0 group-hover:w-3/4  transition-all h-[2px]  bg-black/70"></div>
            </a>
          </li>
          <li>
            <Button
              className="border-black/50 border-4 hover:bg-black/80 hover:border-black/10 hover:text-white transition-all group text-[16px] border-l-2 border-t-2  rounded-lg h-[60px]  px-5"
              variant={"outline"}
            >
              Request a quote
              <ArrowRight className="w-0 transition-all ml-[2px] duration-150 text-white group-hover:w-7 stroke-[2]" />
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
