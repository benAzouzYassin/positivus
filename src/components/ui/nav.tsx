import Logo from "../svg/Logo";
import { Button } from "./button";

export default function Nav() {
  return (
    <nav className="pt-[40px] flex items-center px-[100px]">
      <Logo />
      <ul className="ml-auto text-[20px] items-center flex gap-8">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>
          <Button
            className="border-black text-[16px] border-2 border-black/50 rounded-lg h-[60px]  px-8"
            variant={"outline"}
          >
            Request a quote
          </Button>
        </li>
      </ul>
    </nav>
  );
}
