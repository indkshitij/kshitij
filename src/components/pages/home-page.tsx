import FilledGridWrapper from "../layout/filled-grid-wrapper";
import ExperienceSection from "../sections/experience/experience-section";
import HeroSection from "../sections/home/hero-section";
import EducationSection from "../sections/education/education-section";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FilledGridWrapper />
      <ExperienceSection />
      <FilledGridWrapper />
      <EducationSection />
    </div>
  );
};

export default HomePage;
