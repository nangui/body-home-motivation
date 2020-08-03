import Layout from "../components/Layout";
import SectionHero from "../sections/SectionHero";
import SectionPresentation from "../sections/SectionPresentation";
import SectionObjectif from "../sections/SectionObjectif";
import SectionTarif from "../sections/SectionTarif";
import SectionCoach from "../sections/SectionCoach";
import SectionCallToAction from "../sections/SectionCallToAction";
import SectionTestimonials from "../sections/SectionTestimonials";
import SectionNewsLetter from "../sections/SectionNewsLetter";

const Index = () => (
  <Layout title="Home">
    <SectionHero background="/hero-image.jpg" />
    <SectionPresentation />
    <SectionObjectif />
    <SectionTarif />
    <SectionCoach />
    <SectionCallToAction />
    <SectionTestimonials />
    <SectionNewsLetter />
  </Layout>
);

export default Index;
