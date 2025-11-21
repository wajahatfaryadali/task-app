import HeroCarousel from "./components/carousel/HeroCarousel";
import Topbar from "./components/navBar/Topbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Topbar />
      <HeroCarousel />
    </main>
  );
}
