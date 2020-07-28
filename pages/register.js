import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import CardObjectif from "../components/CardObjectif";

const Register = () => {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [weight, setWeight] = useState(null);
  const [sex, setSex] = useState(null);
  const [size, setSize] = useState(null);
  const [imc, setImc] = useState(0);

  function getGoal(level) {
    setStep(step + 1);
    setGoal(level);
  }

  function calculImc() {
    const sizeCm = size / 100;
    const sizeCm2 = Math.pow(sizeCm, 2);
    setImc(Math.round(weight / sizeCm2));
  }

  function changeSex(e) {
    const value = e.target.value;
    setSex(value);
  }

  useEffect(() => {
    console.log(step);
  }, [step]);

  useEffect(() => {
    console.log(sex);
  }, [sex]);

  useEffect(() => {
    console.log(goal);
  }, [goal]);

  const objectifs = [
    {
      img: "/objectif-1.jpg",
      name: "Prise de masse",
      desc: `Musclez votre corps, développez votre force, endurance et résistance à
        l’effort, prenez de la masse, sculptez et tonifiez votre corps.`,
    },
    {
      img: "/objectif-2.jpg",
      name: "Summer Body (abdos, fessiers, cuisses)",
      desc: `Rendez votre ventre plat, affinez votre taille et votre fessier, sculptez et tonifiez votre corps
      .`,
    },
    {
      img: "/objectif-3.jpg",
      name: "Minceur",
      desc: `Perdez du poids, affinez et raffermissez votre taille,
      détoxifiez-vous.`,
    },
  ];

  return (
    <Layout>
      <div className="register position-relative">
        <div className="container">
          <div className="mb-2">
            {(step == 0 && (
              <div>
                <h1 className="mt-3 mt-sm-4 title text-center text-uppercase text-gradient font-weight-bold">
                  Que souhaitez vous?
                </h1>
                <section className="objectif">
                  <div className="row justify-content-center">
                    {objectifs.map((obj, index) => (
                      <div key={index} onClick={() => getGoal(obj.name)}>
                        <CardObjectif
                          img={obj.img}
                          name={obj.name}
                          description={obj.desc}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )) ||
              (step == "1" && (
                <div>
                  <h1 className="mt-3 mt-sm-4 title text-center text-uppercase text-gradient font-weight-bold">
                    Dites nous un peu sur vous
                  </h1>
                  <p className="text-center">
                    Vous avez choisi comme objectif{" "}
                    <span className="text-gradient">{goal}</span>, pour une
                    meilleure pris en charge, veuillez completer c'est
                    informations
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8">
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column flex-sm-row justify-content-between">
                          <div className="mt-3 mt-sm-5">
                            <label htmlFor="weight">Votre Poids (en Kg)</label>
                            <input
                              type="text"
                              inputmode="numeric"
                              pattern="[0-9]*"
                              className="form-control form-control-lg shadow"
                              min="30"
                              id="weight"
                              placeholder="68"
                              name={weight}
                              onChange={() => setWeight(event.target.value)}
                            />
                          </div>
                          <div className="mt-3 mt-sm-5">
                            <label htmlFor="size">
                              Votre Taille (en Centimètre)
                            </label>
                            <input
                              type="text"
                              inputmode="numeric"
                              pattern="[0-9]*"
                              className="form-control form-control-lg shadow"
                              min="100"
                              id="size"
                              placeholder="179"
                              name={size}
                              onChange={() => setSize(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mt-3 mt-sm-5 mb-3 w-100">
                          <button
                            className={
                              imc
                                ? "d-none"
                                : "btn btn-block btn-primary btn-gradient"
                            }
                            onClick={calculImc}
                          >
                            Calculer votre IMC
                          </button>
                          <p className={imc == 0 ? "d-none" : "h3 mt-3"}>
                            Votre indice de masse corporel est{" "}
                            <span className="h2 text-gradient">{imc}</span>{" "}
                            kg/m². Plus qu'une etape, vous y êtes presque
                          </p>
                          <button
                            className={
                              !imc
                                ? "d-none"
                                : "btn btn-outline-primary btn-block w-50 mt-4"
                            }
                            onClick={() => setStep(step + 1)}
                          >
                            Suivant
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )) ||
              (step == "2" && (
                <div>
                  <h1 className="mt-3 mt-sm-4 title text-center text-uppercase text-gradient font-weight-bold">
                    Vos informations
                  </h1>
                  <p className="text-center">
                    Ces informations nous permettrons de construire votre
                    programme sportif personnalisé.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-9">
                      <form>
                        <div className="form-row mt-3">
                          <div className="col-sm form-group">
                            <label htmlFor="firstname">Nom</label>
                            <input
                              className="form-control form-control-lg shadow"
                              type="text"
                              id="firstname"
                              name="firstname"
                              placeholder="Diop"
                            />
                          </div>
                          <div className="col-sm form-group">
                            <label htmlFor="lastname">Prénom</label>
                            <input
                              className="form-control form-control-lg shadow"
                              type="text"
                              name="lastname"
                              id="lastname"
                              placeholder="Cheikh Anta"
                            />
                          </div>
                        </div>
                        <div className="form-row mt-sm-3">
                          <div className="col-sm form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              className="form-control form-control-lg shadow"
                              type="email"
                              name="email"
                              id="email"
                              placeholder="test@gmail.com"
                            />
                          </div>
                          <div className="col-sm form-group">
                            <label htmlFor="date_naiss">
                              Date de naissance
                            </label>
                            <input
                              className="form-control form-control-lg shadow"
                              type="date"
                              name="date_naiss"
                              id="date_naiss"
                            />
                          </div>
                        </div>
                        <div className="form-row mt-sm-3">
                          <div className="col-sm form-group">
                            <label htmlFor="password">Mot De Passe</label>
                            <input
                              className="form-control form-control-lg shadow"
                              type="password"
                              name="password"
                              id="password"
                              placeholder="*************"
                            />
                          </div>
                          <div className="col-sm form-group">
                            <label htmlFor="password_confirm">
                              Confirmation Mot De Passe
                            </label>
                            <input
                              className="form-control form-control-lg shadow"
                              type="password"
                              name="password_cofirm"
                              id="password_confirm"
                              placeholder="*************"
                            />
                          </div>
                        </div>
                        <button className="btn btn-primary btn-lg btn-gradient btn-block my-3">
                          Je m'enregistre
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
