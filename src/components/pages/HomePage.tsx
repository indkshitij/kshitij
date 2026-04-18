import FilledGridWrapper from "../layout/FilledGridWrapper";
import ExperienceSection from "../sections/Experience/ExperienceSection";
import HeroSection from "../sections/Home/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FilledGridWrapper/>
      <ExperienceSection />
    </div>
  );
};

export default HomePage;
