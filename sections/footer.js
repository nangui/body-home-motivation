import Link from "next/link";
import { Nav as BootstrapNav, Container, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const links = [
  { href: "/", label: "ACCUEIL" },
  { href: "/coachs", label: "COACHS" },
  { href: "/tarifs", label: "TARIFS" },
  { href: "/boutique", label: "BOUTIQUE" },
  { href: "/conseils", label: "CONSEILS & BIEN-ÊTRE" },
];

const userLink = [
  { href: "/login", label: "SE CONNECTER" },
  { href: "/register", label: "CREER UN COMPTE" },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="p-3">
      <Container>
        <div className="w-100 text-center">
          <Navbar.Brand href="#home">
            <img
              src="/logo/logo-white-2.png"
              className="logo"
              alt="Logo de Body Home Motivation"
            />
          </Navbar.Brand>
          <div className="d-flex flex-column flex-sm-row align-items-start justify-content-around">
            <div className="align-self-center">
              <h6 className="text-white mb-4">Liens Utiles</h6>
              <ul className="list-unstyled">
                {links.map((value, index) => (
                  <li key={index}>
                    <Link href={value.href}>
                      <a
                        className={
                          router.pathname === value.href
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {value.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-white mb-4">Notre Boutique</h6>
              <ul className="list-unstyled">
                <li className="text-white mb-3">
                  Avenue bourguiba en face station <br /> OLA de l'école Police,
                  Baobab - Amitié 3
                </li>
                <li className="text-white mb-3">
                  (+221) 77 109 47 20 / 76 155 76 25
                </li>
                <li className="d-flex justify-content-around w-50 mr-auto ml-auto">
                  <a href="" className="d-flex nav-link link-logo">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                  <a href="" className="d-flex nav-link link-logo">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </a>
                  <a href="" className="d-flex nav-link link-logo">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="align-self-center">
              <h6 className="text-white mb-4">Fidélité</h6>
              <ul className="list-unstyled">
                {userLink.map((value, index) => (
                  <li key={index}>
                    <Link href={value.href}>
                      <a
                        className={
                          router.pathname === value.href
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {value.label}
                      </a>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/condition-generale-de-vente">
                    <a
                      className={
                        router.pathname === "/condition-generale-de-vente"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Condition Générale De Vente
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/politique-de-confidentialite">
                    <a
                      className={
                        router.pathname === "/politique-de-confidentialite"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Politique De Confidentialité
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/politique-de-retour">
                    <a
                      className={
                        router.pathname === "/politique-de-retour"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Politique De Retour
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Navbar className="justify-content-center border-top">
          <small className="text-white-50">
            &copy; 2020 Body home motivation, Tous Droits Réservés
          </small>
        </Navbar>
      </Container>
    </footer>
  );
};

export default Footer;
