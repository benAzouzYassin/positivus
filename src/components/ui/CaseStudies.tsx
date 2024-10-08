import { ArrowUpRightIcon } from "lucide-react";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="md:px-[40px] px-4 lg:px-[100px]  pb-20"
    >
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Case Studies
      </p>
      <div className="  bg-[#191A23] gap-6 lg:grid-cols-3 grid  relative lg:h-[280px] px-6 lg:px-[60px] py-8 lg:py-[50px] rounded-2xl lg:rounded-[32px] shadow-sm">
        <div className="flex flex-col lg:border-r-2 lg:pr-4">
          <p className=" lg:text-lg font-normal text-white/90 ">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <p className="group text-[#B9FF66] font-normal hover:bg-[#B9FF66] w-fit hover:cursor-pointer active:scale-95 py-2 hover:text-black lg:px-2 rounded transition-all hover:font-medium  text-2xl items-center mt-auto flex gap-2">
            Learn more{" "}
            <ArrowUpRightIcon className="w-7  group-hover:rotate-45 transition-transform duration-300 h-7" />
          </p>
        </div>

        <div className="flex flex-col lg:pl-8 lg:pr-2 lg:border-r-2">
          <p className=" lg:text-lg font-normal text-white/90 ">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <p className="group text-[#B9FF66] font-normal hover:bg-[#B9FF66] w-fit hover:cursor-pointer active:scale-95 py-2 hover:text-black lg:px-2 rounded transition-all hover:font-medium  text-2xl items-center mt-auto flex gap-2">
            Learn more{" "}
            <ArrowUpRightIcon className="w-7  group-hover:rotate-45 transition-transform duration-300 h-7" />
          </p>
        </div>

        <div className="flex flex-col lg:pl-8">
          <p className=" lg:text-lg font-normal text-white/90 ">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <p className="group text-[#B9FF66] font-normal hover:bg-[#B9FF66] w-fit hover:cursor-pointer active:scale-95 py-2 hover:text-black lg:px-2 rounded transition-all hover:font-medium  text-2xl items-center mt-auto flex gap-2">
            Learn more{" "}
            <ArrowUpRightIcon className="w-7  group-hover:rotate-45 transition-transform duration-300 h-7" />
          </p>
        </div>
      </div>
    </section>
  );
}
