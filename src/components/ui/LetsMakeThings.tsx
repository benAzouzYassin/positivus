import LetsMakeThingsSvg from "../svg/LetsMakeThingsSvg";
import { Button } from "./button";

export default function LetsMakeThings() {
  return (
    <section className="px-[100px] pb-20">
      <div className="bg-[#F3F3F3] relative h-[280px] p-[60px] rounded-[32px] shadow-sm">
        <p className="text-4xl font-bold -mt-4">
          Let&apos;s make things happen
        </p>
        <p className="text-lg mt-4 max-w-[700px]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="px-7 mt-4 rounded-lg h-[55px]">
          Book a consultation
        </Button>
        <LetsMakeThingsSvg className="absolute top-0 right-20" />
      </div>
    </section>
  );
}
