import Container from "react-bootstrap/Container";
import CardObjectif from "../components/CardObjectif";

const Objectif = () => {
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
    <section
      className="w-100 py-3 objectif"
      style={{ backgroundColor: "#000000" }}
    >
      <Container>
        <div className="d-flex flex-column align-items-center py-5">
          <h1 className="text-primary title text-center w-75 mb-2 text-uppercase">
            Quel est votre objectif?
          </h1>
          <h5 className="subtitle mb-5">
            Choisissez votre objectif principal pour constituer votre programme
            sur-mesure
          </h5>
          <div className="mt-5">
            <h6 className="text-center text-white font-weight-light mb-4">
              Notre objectif est de vous faire parvenir au vôtre
            </h6>
            <div className="row justify-content-center">
              {objectifs.map((obj, index) => (
                <CardObjectif
                  img={obj.img}
                  name={obj.name}
                  description={obj.desc}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Objectif;
