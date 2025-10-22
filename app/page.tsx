import Oneko from "@/components/ui/Oneko";
import Sidebar from "@/components/ui/Sidebar";
import HeroSection from "@/components/ui/Hero";
import BackgroundAudioPlayer from "@/components/ui/BackgroundAudioPlayer";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundAudioPlayer />
      <Oneko />
      <Sidebar />
      <HeroSection />
    </div>
  );
}
