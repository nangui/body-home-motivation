import Container from "react-bootstrap/Container";

const Tarif = () => (
  <section
    className="w-100 py-3 tarifs position-relative"
    style={{ backgroundImage: "url('/women-having-exercise.jpg')" }}
  >
    <div className="cover position-absolute"></div>
    <Container>
      <div className="d-flex flex-column align-items-center py-2 py-md-3 py-lg-5">
        <h1 className="text-white title text-center w-75 mb-2 text-uppercase">
          TARIFS DES ABONNEMENTS
        </h1>
        <div className="col-12 table-responsive mt-5">
          <table className="bg-white table table-bordered w-100">
            <thead>
              <tr className="table-active">
                <th style={{ width: "50%" }}></th>
                <th scope="row" className="text-center">
                  <span>Abonnement 1 mois</span>
                </th>
                <th scope="row" className="text-center">
                  <span>Abonnement 3 mois</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Montant / Mois</td>
                <td scope="row" className="text-center">
                  <span className="h3 text-gradient font-weight-bold">
                    15 000
                  </span>{" "}
                  <small className="text-gradient font-weight-bold">
                    F CFA / mois
                  </small>
                </td>
                <td scope="row" className="text-center">
                  <span className="h3 text-gradient font-weight-bold">
                    12 000{" "}
                  </span>{" "}
                  <small className="text-gradient font-weight-bold">
                    F CFA / mois
                  </small>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="table-active">
                  Services
                </td>
              </tr>
              <tr>
                <td scope="row">Accès à un programme sportif sur-mesure</td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
              </tr>
              <tr>
                <td scope="row">Programme en nutrition complet</td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  Accès au forum d’échange entre abonnés et coachs
                </td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
              </tr>
              <tr>
                <td scope="row">Suivi de vos progrès en temps réel</td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  Accès aux challenges Code promo valable 3 mois et utilisable 5
                  fois avec
                </td>
                <td scope="row"></td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
              </tr>
              <tr>
                <td scope="row">10% sur tous nos articles boutique</td>
                <td scope="row"></td>
                <td scope="row" className="text-center">
                  <i className="las la-check"></i>
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row" className="text-center">
                  <button className="btn btn-gradient btn-primary">
                    Je m'inscris
                  </button>
                </td>
                <td scope="row" className="text-center">
                  <button className="btn btn-gradient btn-primary">
                    Je m'inscris
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  </section>
);

export default Tarif;
