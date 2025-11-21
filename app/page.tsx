import CardsSection from "./components/cardsSection/cardsSection";
import HeroCarousel from "./components/carousel/HeroCarousel";
import Topbar from "./components/navBar/Topbar";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Topbar />
      <HeroCarousel />
      <CardsSection />
    </main>
  );
}
