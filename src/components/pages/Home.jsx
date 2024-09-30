import FreelanceWork from "../ui/FreelanceWork";
import Hero from "../ui/Hero";
import LatestWork from "../ui/LatestWork";
import Pitch from "../ui/Pitch";
import TechStack from "../ui/TechStack";

function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <LatestWork />
      <FreelanceWork />
      <Pitch />
    </>
  );
}

export default Home;
