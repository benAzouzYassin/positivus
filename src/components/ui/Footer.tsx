import FacebookSvg from "../svg/FacebookSvg";
import LinkedInSvg from "../svg/LinkedInSvg";
import Logo from "../svg/Logo";

export default function Footer() {
  return (
    <footer className=" bg-[#191A23] md:pt-[60px] pt-12 md:px-[60px] px-4 rounded-t-[32px]  mt-20 md:mt-40">
      <div className="flex text-white">
        <div className=" flex md:flex-row flex-col w-full  items-center">
          <Logo color="white" />
          <ul className="md:ml-auto text-[20px] mt-5 md:mt-0  items-center flex md:flex-row flex-col  gap-8">
            <li className="underline-offset-[6px] opacity-80 hover:opacity-100 underline">
              <a href="#about">About us</a>
            </li>
            <li className="underline-offset-[6px] opacity-80 hover:opacity-100 underline">
              <a href="#services">Services</a>
            </li>
            <li className="underline-offset-[6px] opacity-80 hover:opacity-100 underline">
              <a href="#case-studies">Cases</a>
            </li>
            <li className="underline-offset-[6px] opacity-80 hover:opacity-100 underline">
              <a href="#our-process">Our process</a>
            </li>
            <li className="underline-offset-[6px] opacity-80 hover:opacity-100 underline">
              <a href="#testimonials">Testimonials</a>
            </li>

            <li className="underline-offset-[6px] opacity-80 hover:opacity-100 underline"></li>
          </ul>
        </div>
      </div>

      <div className=" border-t md:text-lg text-sm text-white/90 flex items-center md:mt-10 pb-5 pt-4 ">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <div className="ml-auto md:mr-7  scale-90 md:scale-100 opacity-80 items-center flex  gap-2">
          <LinkedInSvg />
          <FacebookSvg />
        </div>
      </div>
    </footer>
  );
}
