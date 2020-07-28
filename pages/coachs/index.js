import { Container } from "react-bootstrap";

import Layout from "../../components/Layout";
import CardCoach from "../../components/CardCoach";

const Coachs = () => {
  const coachs = [
    {
      image: "/profile-sidy.jpg",
      name: "Sidy Sidibe",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident
      voluptates quidem perferendis enim? Non soluta, reprehenderit tempore
      velit eaque ullam et enim, at ipsum nam eligendi accusantium hic?
      Praesentium.`,
    },
    {
      image: "/profile-ibrahima.jpg",
      name: "Ibrahima Diouf",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident
      voluptates quidem perferendis enim? Non soluta, reprehenderit tempore
      velit eaque ullam et enim, at ipsum nam eligendi accusantium hic?
      Praesentium.`,
    },
    {
      image: "/profile-kine.jpg",
      name: "Kine Ndiaye",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident
      voluptates quidem perferendis enim? Non soluta, reprehenderit tempore
      velit eaque ullam et enim, at ipsum nam eligendi accusantium hic?
      Praesentium.`,
    },
    {
      image: "/profile-abdoul.jpg",
      name: "Adbou Karime Ndiaye",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident
      voluptates quidem perferendis enim? Non soluta, reprehenderit tempore
      velit eaque ullam et enim, at ipsum nam eligendi accusantium hic?
      Praesentium.`,
    },
  ];

  return (
    <Layout>
      <Container>
        <h1 className="mt-3 mt-sm-5 text-gradient font-weight-bold">
          Nos Coachs
        </h1>
        <p className="mb-3 mb-sm-5">
          Tous les coachs sont des références internationales dans leur
          discipline mais ils ont ce « petit quelque chose » en plus qui fait
          que ce sont eux que CoachClub a choisis : pédagogues, sympathiques,
          chaleureux, ils vont vous donner envie de bouger !
        </p>
        <div className="d-flex flex-column">
          {coachs.map((coach, index) => (
            <CardCoach
              image={coach.image}
              name={coach.name}
              description={coach.description}
              key={index}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Coachs;
