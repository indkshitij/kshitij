import FilledGridWrapper from "../layout/FilledGridWrapper";
import ExperienceSection from "../sections/Experience/ExperienceSection";
import HeroSection from "../sections/Home/HeroSection";
import EducationSection from "../sections/Education/EducationSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FilledGridWrapper />
      <ExperienceSection />
      <FilledGridWrapper/>
      <EducationSection />
    </div>
  );
};

export default HomePage;
