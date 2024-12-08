import HeroSection from "./components/Hero";
import PopularCars from "./components/PopularCars";
import RecommendationCars from "./components/Recomendation";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PopularCars/>
      <RecommendationCars/>
    </div>
  );
}
