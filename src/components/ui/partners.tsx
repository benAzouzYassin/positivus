import Marquee from "./Marquee";

export default function Partners() {
  const partnersImages = [
    "/partners/1.png",
    "/partners/2.svg",
    "/partners/3.png",
    "/partners/4.svg",
    "/partners/5.png",
    "/partners/6.svg",
  ];

  return (
    <div className="lg:px-[100px] px-0 md:px-[40px]">
      <div className="w-full  partners-gradient  relative mt-10    h-28 justify-center gap-4 overflow-hidden  items-center ">
        <Marquee className="[--duration:20s] ">
          {partnersImages.map((img) => (
            <div
              key={img}
              className="flex  ml-20 items-center justify-start grayscale"
            >
              <img
                src={img}
                className="w-auto object-center object-contain "
                alt=""
              />
            </div>
          ))}
        </Marquee>
        <div className="bg-gradient-to-r from-white top-0  to-white/20 absolute w-24  h-full left-0"></div>
        <div className="bg-gradient-to-l from-white top-0  to-white/20 absolute w-24  h-full right-0"></div>
      </div>
    </div>
  );
}
