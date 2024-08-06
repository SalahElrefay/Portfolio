import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import AboutSection from "@/containers/AboutSection";
import ContactSection from "@/containers/ContactSection";
import HomeSection from "@/containers/HomeSection";
import ProjectsSection from "@/containers/ProjectsSection";
import SkillsSection from "@/containers/SkillsSection";


export default function Home() {
  return (
    <main className="pt-12" >
      
      <Navbar/>
      <div className="container space-y-16 py-28" >
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
      <ScrollToTop/>
      <Footer/>

    </main>
  )
}
