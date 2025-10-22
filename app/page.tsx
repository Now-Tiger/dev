import HeroSection from "@/components/ui/Hero";
import Sidebar from "@/components/ui/Sidebar";
import BackgroundAudioPlayer from "@/components/ui/BackgroundAudioPlayer";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundAudioPlayer />
      <Sidebar />
      <HeroSection />
    </div>
  );
}
