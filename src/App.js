import "./App.css";
import "./tablet.css";
import "./phone.css";
import AboutSection from "./components/about/AboutSection";
import BannerSection from "./components/banner/BannerSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceSection from "./components/experience/ExperienceSection";
import ProjectSection from "./components/projects/ProjectSection";
import InterestSection from "./components/interest/InterestSection";
import ReferenceSection from "./components/reference/ReferenceSection";

function App() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <InterestSection />
      <ReferenceSection />
    </>
  );
}

export default App;
