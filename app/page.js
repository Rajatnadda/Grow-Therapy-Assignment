import Faq from "./components/Faq";
import Intro from "./components/Intro";
import Life from "./components/Life";
import Specialist from "./components/Specialist";
import OurOffice from "./components/OurOffice";
import Dashboard from "./dashboard/page";
import RevealOnScroll from "./components/RevealOnScroll";
import ContactCTA from "./components/ContactCTA";
import Background from "./components/Background";
import Guidance from "./components/Guidance";

export default function Home() {
  return (
    <div className="overflow-hidden">
     
      <RevealOnScroll width="100%">
        <Dashboard />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%" delay={0.2}>
        <Life />
      </RevealOnScroll>

      <RevealOnScroll width="100%" delay={0.2}>
        <Specialist />
      </RevealOnScroll>

      <RevealOnScroll width="100%" delay={0.2}>
        <OurOffice />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%" delay={0.2}>
        <Guidance />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%" delay={0.2}>
        <Intro />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%" delay={0.2}>
        <Faq />
      </RevealOnScroll>
      <RevealOnScroll width="100%" delay={0.2}>
        <Background/>
      </RevealOnScroll>
        <RevealOnScroll width="100%" delay={0.2}>
        <ContactCTA/>
      </RevealOnScroll>

    </div>
  );
}
