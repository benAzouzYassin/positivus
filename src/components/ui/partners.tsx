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
    <div className="w-full  relative mt-10 grid grid-cols-6 px-[100px]  h-28 justify-center gap-4 overflow-hidden  items-center ">
      {partnersImages.map((img) => (
        <div key={img} className="flex  items-center justify-start grayscale">
          <img
            src={img}
            className="w-auto object-center object-contain "
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
