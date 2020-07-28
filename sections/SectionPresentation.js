import Container from "react-bootstrap/Container";

const Presentation = () => (
  <section className="presentation w-100 bg-white py-3">
    <Container>
      <div className="d-flex flex-column align-items-center py-5">
        <h1 className="text-primary title text-center w-75 mb-2">
          UN PROGRAMME SPORT ET NUTRITION PERSONNALISÉ
        </h1>
        <h5 className="subtitle mb-5">
          KAYA est la première plateforme sénégalaise de coaching en sport et
          nutrition. A partir de votre indice de masse corporelle, nous vous
          proposons un programme sur-mesure simple et efficace le plus adapté à
          votre profil santé. Notre plateforme en mots-clés :
        </h5>

        <div className="px-5 row justify-content-center">
          <div className="col-sm-4 col-12 d-flex flex-column justify-content-center align-items-center mb-5 mb-sm-0">
            <div className="rounded-circle border border-primary circle d-flex justify-content-center align-items-center flex-column">
              <img src="/icons8-time-100.png" alt="icon time" />
            </div>
            <h6 className="mt-3 text-center">PLUS DE 1000H COURS EN VIDÉO</h6>
          </div>
          <div className="col-sm-4 col-12 d-flex flex-column justify-content-center align-items-center mb-5 mb-sm-0">
            <div className="rounded-circle border border-primary circle d-flex justify-content-center align-items-center flex-column">
              <img src="/icons8-training-100.png" alt="icon training" />
            </div>
            <h6 className="mt-3 text-center">DES COACHS PROFÉSSIONNELS</h6>
          </div>
          <div className="col-sm-4 col-12 d-flex flex-column justify-content-center align-items-center mb-5 mb-sm-0">
            <div className="rounded-circle border border-primary circle d-flex justify-content-center align-items-center flex-column">
              <img src="/icons8-settings.svg" alt="icon settings" />
            </div>
            <h6 className="mt-3 text-center">
              UN PROGRAMME EVOLUTIF ET PERSONALISÉ
            </h6>
          </div>
          <div className="col-sm-4 col-12 d-flex flex-column justify-content-center align-items-center mb-5 mb-sm-0">
            <div className="rounded-circle border border-primary circle d-flex justify-content-center align-items-center flex-column">
              <img src="/icons8-marketing-80.png" alt="icon marketing" />
            </div>
            <h6 className="mt-3 text-center">
              UN SUIVI COMPLET DE VOS PROGRÈS
            </h6>
          </div>
          <div className="col-sm-4 col-12 d-flex flex-column justify-content-center align-items-center mb-5 mb-sm-0 mt-sm-5">
            <div className="rounded-circle border border-primary circle d-flex justify-content-center align-items-center flex-column">
              <img src="/icons8-calories-100.png" alt="icon calories" />
            </div>
            <h6 className="mt-3 text-center">
              UN PROGRAMME NUTRITION REPARTI SUR 12 SEMAINES
            </h6>
          </div>
          <div className="col-sm-4 col-12 d-flex flex-column justify-content-center align-items-center mt-sm-5">
            <div className="rounded-circle border border-primary circle d-flex justify-content-center align-items-center flex-column">
              <img src="/icons8-life-cycle-100.png" alt="icon life cycle" />
            </div>
            <h6 className="mt-3 text-center">
              UN COACHING MINCEUR PERSONNALISÉ
            </h6>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Presentation;
