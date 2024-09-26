import Footer from "./ui/Footer";
import FreelanceWork from "./ui/FreelanceWork";
import Hero from "./ui/Hero";
import LatestWork from "./ui/LatestWork";
import Pitch from "./ui/Pitch";
import TechStack from "./ui/TechStack";

function AppLayout() {
  return (
    <>
      <Hero />
      <TechStack />
      <LatestWork />
      <FreelanceWork />
      <Pitch />
      <Footer />
    </>
  );
}

export default AppLayout;
