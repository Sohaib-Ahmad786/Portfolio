import FeaturedProjects from "@/components/home/FeaturedProject";
import Hero from "@/components/home/hero";
import LearningJourney from "@/components/home/LearningJourny";
import PracticeProjectsSection from "@/components/home/PracticeProjects";
import TechStack from "@/components/home/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TechStack/>
      <FeaturedProjects/>
      <PracticeProjectsSection/>
      <LearningJourney/>
    </div>
  );
}
