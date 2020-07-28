import Container from "react-bootstrap/Container";

const Coach = () => (
  <section className="coach w-100 bg-white py-3">
    <Container>
      <div className="d-flex flex-column align-items-center py-5">
        <h1 className="text-primary title text-center w-75 mb-2">
          NOTRE EQUIPE DE COACHS
        </h1>
        <h5 className="subtitle mb-5">
          Des coaches pour vous accompagner durant votre programme
        </h5>
        <div className="py-5 row justify-content-center">
          <div className="col-sm-6 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center p-4">
            <div className="position-relative rounded-circle circle first-part">
              <img
                className="d-block position-absolute rounded-circle w-100"
                src="/profile-ibrahima.jpg"
                alt="icon time"
              />
            </div>
            <h6 className="mt-3 text-center text-primary font-weight-bold first-part">
              Ibrahima Diouf
            </h6>
            <p className="text-center first-part">
              Lorem ipsum dolor sit. lorem ipsum dolor epsilum
            </p>
          </div>
          <div className="col-sm-6 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center p-4">
            <div className="position-relative rounded-circle circle first-part">
              <img
                className="d-block position-absolute rounded-circle w-100"
                src="/profile-kine.jpg"
                alt="icon time"
              />
            </div>
            <h6 className="mt-3 text-center text-primary font-weight-bold first-part">
              Kine Ndiaye
            </h6>
            <p className="text-center first-part">
              Lorem ipsum dolor sit. lorem ipsum dolor epsilum
            </p>
          </div>
          <div className="col-sm-6 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center p-4">
            <div className="position-relative rounded-circle circle first-part">
              <img
                className="d-block position-absolute rounded-circle w-100"
                src="/profile-abdoul.jpg"
                alt="icon time"
              />
            </div>
            <h6 className="mt-3 text-center text-primary font-weight-bold first-part">
              Abdoul Karim Ndiaye
            </h6>
            <p className="text-center first-part">
              Lorem ipsum dolor sit. lorem ipsum dolor epsilum
            </p>
          </div>
          <div className="col-sm-6 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center p-4">
            <div className="position-relative rounded-circle circle first-part">
              <img
                className="d-block position-absolute rounded-circle w-100"
                src="/profile-sidy.jpg"
                alt="icon time"
              />
            </div>
            <h6 className="mt-3 text-center text-primary font-weight-bold first-part">
              Sidy Sidibe
            </h6>
            <p className="text-center first-part">
              Lorem ipsum dolor sit. lorem ipsum dolor epsilum
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Coach;
