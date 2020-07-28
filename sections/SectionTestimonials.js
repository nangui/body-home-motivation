import Container from "react-bootstrap/Container";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => (
  <section className="testimonials d-flex flex-column justify-content-center">
    <Container>
      <div className="d-flex flex-column align-items-center py-5">
        <h1 className="text-primary title text-center w-75 mb-2">
          ÇA MARCHE POUR EUX
        </h1>
        <h5 className="subtitle mb-5">
          Ils ont atteint leur objectifs et en sont fiers! Découvrez leur
          parcours
        </h5>
        <div className="px-5 row justify-content-center">
          <div className="col-sm-4 col-12">
            <TestimonialCard />
          </div>
          <div className="col-sm-4 col-12 mt-4 mt-sm-0">
            <TestimonialCard />
          </div>
          <div className="col-sm-4 col-12 mt-4 mt-sm-0">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Testimonials;
