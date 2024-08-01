import { ArrowUpRightIcon } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="px-[100px]  pb-20">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Services
      </p>
      <div className="bg-[#191A23] grid-cols-3 grid  relative h-[280px] px-[60px] py-[50px] rounded-[32px] shadow-sm">
        <div className="flex flex-col border-r-2 pr-4">
          <p className=" text-lg font-normal text-white/90">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <p className="text-[#B9FF66] font-normal text-2xl items-center mt-auto flex gap-2">
            Learn more <ArrowUpRightIcon className="w-7 h-7" />
          </p>
        </div>

        <div className="flex flex-col pl-8 pr-2 border-r-2">
          <p className=" text-lg font-normal text-white/90">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <p className="text-[#B9FF66] font-normal text-2xl items-center mt-auto flex gap-2">
            Learn more <ArrowUpRightIcon className="w-7 h-7" />
          </p>
        </div>

        <div className="flex flex-col pl-8">
          <p className=" text-lg font-normal text-white/90">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <p className="text-[#B9FF66] font-normal text-2xl items-center mt-auto flex gap-2">
            Learn more <ArrowUpRightIcon className="w-7 h-7" />
          </p>
        </div>
      </div>
    </section>
  );
}
