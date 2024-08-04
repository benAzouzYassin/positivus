import { Button } from "./button";

export default function Contact() {
  return (
    <section id="contact" className="lg:px-[100px] px-4 md:px-[40px]">
      <p className="bg-[#B9FF66] rounded-xl text-4xl font-black mb-4 py-2 w-fit px-4 ">
        Contact Us{" "}
      </p>
      <div className="min-h-[500px] flex   flex-row p-5 md:p-[60px] w-full rounded-xl md:rounded-[42px] bg-[#F3F3F3] shadow-md">
        <div className="md:w-1/2 w-full">
          <div className="w-full text-lg flex flex-col">
            <label htmlFor="name" className="text-xl font-medium ">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-[50px] rounded-lg bg-white text-lg pl-4 focus-within:pl-6 transition-all font-medium placeholder:font-normal focus-within:border-none border-black/50 border-2"
              placeholder="Name"
            />
          </div>
          <div className="w-full mt-4 text-lg flex flex-col">
            <label htmlFor="email" className="text-xl font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="h-[50px] rounded-lg bg-white text-lg pl-4 focus-within:pl-6 transition-all font-medium placeholder:font-normal focus-within:border-none border-black/50 border-2"
              placeholder="E-mail"
            />
          </div>

          <div className="w-full mt-4 text-lg flex flex-col">
            <label htmlFor="message" className="text-xl font-medium ">
              Message
            </label>
            <textarea
              rows={6}
              id="message"
              className=" py-3 rounded-lg bg-white text-lg pl-4 focus-within:pl-6 transition-all font-medium placeholder:font-normal focus-within:border-none border-black/50 border-2"
              placeholder="Message"
            />
          </div>
          <Button className="bg-[#191A23] mt-4 w-full h-[60px] rounded-lg text-lg ">
            Send Message
          </Button>
        </div>
        <div className="w-1/2  items-center hidden md:flex justify-end pl-7 relative">
          <img alt="" src="/contactSection.svg" />
        </div>
      </div>
    </section>
  );
}
