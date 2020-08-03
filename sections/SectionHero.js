import Link from "next/link";

const Hero = ({ message, background }) => {
  return (
    <section
      className="hero d-flex flex-column justify-content-center"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <div className="content ml-sm-5 d-flex justify-content-center align-items-center flex-column w-52 w-sm-100">
        <div className="title-cover w-100 text-center p-2 mb-3">
          <h1 className="title">
            DES RESULTATS VISIBLES EN QUELQUES SEMAINES, SATISFACTION GARANTIE
            {message}
          </h1>
        </div>

        <Link href="/register">
          <button className="btn btn-primary btn-lg btn-gradient border-0 shadow-sm text-uppercase">
            Je demarre mon programme
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
