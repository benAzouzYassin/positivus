import FacebookSvg from "../svg/FacebookSvg";
import LinkedInSvg from "../svg/LinkedInSvg";
import Logo from "../svg/Logo";

export default function Footer() {
  return (
    <footer className=" bg-[#191A23] pt-[60px] px-[60px] rounded-t-[32px]  mt-40">
      <div className="flex text-white">
        <div className=" flex w-full  items-center">
          <Logo color="white" />
          <ul className="ml-auto text-[20px] items-center flex gap-8">
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

      <div className=" border-t text-lg text-white/90 flex items-center mt-10 pb-5 pt-4 ">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <div className="ml-auto mr-7 opacity-80 items-center flex  gap-2">
          <LinkedInSvg />
          <FacebookSvg />
        </div>
      </div>
    </footer>
  );
}
