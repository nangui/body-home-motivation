import Link from "next/link";
import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";
import { useRouter } from "next/router";

const links = [
  { href: "/", lgLabel: "ACCUEIL", smLabel: "ACCUEIL" },
  { href: "/coachs", lgLabel: "COACHS", smLabel: "COACHS" },
  { href: "/tarifs", lgLabel: "TARIFS", smLabel: "TARIFS" },
  { href: "/boutique", lgLabel: "BOUTIQUE", smLabel: "BOUTIQUE" },
  { href: "/conseils", lgLabel: "CONSEILS & BIEN-ÊTRE", smLabel: "CONSEILS" },
  { href: "/login", lgLabel: "CONNEXION", smLabel: "CONNEXION" },
  { href: "/register", lgLabel: "ABONNEZ-VOUS", smLabel: "S'ABONNER" },
];

export default function Nav() {
  const router = useRouter();

  return (
    <div className="w-100">
      <Navbar className="p-0" bg="white" variant="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo/logo-black-2.png"
              className="logo"
              alt="Logo de Body Home Motivation"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <BootstrapNav className="ml-auto justify-content-center align-items-center align-items-sm-left">
              {links.map((value, index) => (
                <Link href={value.href} key={index}>
                  <a
                    className={
                      router.pathname === value.href
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    <span className="d-md-none">{value.smLabel}</span>
                    <span className="d-none d-md-block">{value.lgLabel}</span>
                  </a>
                </Link>
              ))}
            </BootstrapNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
