import HeroContent from "./HeroContent";
import HeroTechs from "./HeroTechs";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="h-max bg-gradient-to-r from-red-50 to-orange-100">
        <Navbar />
        <HeroContent />
      </div>
      <HeroTechs />
    </>
  );
}

export default Hero;
