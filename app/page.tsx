import Oneko from "@/components/ui/Oneko";
import Sidebar from "@/components/ui/Sidebar";
import HeroSection from "@/components/ui/Hero";
import BackgroundAudioPlayer from "@/components/ui/BackgroundAudioPlayer";
import ProjectsSection from "@/components/ui/Projects";
import TimeLine from "@/components/ui/TimeLine";
import VisitorCount from "@/components/ui/Visitors";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundAudioPlayer />
      <Oneko />
      <Sidebar />
      <HeroSection />
      <ProjectsSection />
      <TimeLine />
      <VisitorCount />
    </div>
  );
}
