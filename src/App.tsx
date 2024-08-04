import CaseStudies from "./components/ui/CaseStudies";
import Contact from "./components/ui/Contact";
import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import Nav from "./components/ui/nav";
import Partners from "./components/ui/partners";
import Services from "./components/ui/Services";
import Testimonials from "./components/ui/Testimonials";
import WorkingProcess from "./components/ui/WorkingProcess";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <Services />
      {/* <LetsMakeThings /> */}
      <CaseStudies />
      <WorkingProcess />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
