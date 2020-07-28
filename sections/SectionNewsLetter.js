const NewsLetter = () => (
  <section className="news-letter d-flex flex-column flex-sm-row justify-content-center align-items-center px-3 px-sm-0">
    <h5 className="text-white mr-sm-4 text-uppercase mb-0">
      S'abonnez à notre newsletter
    </h5>

    <div className="bg-white p-1 input-group w-sm-35 mt-3 mt-sm-0">
      <input className="form-control" placeholder="Entrer votre email" />
      <button className="btn btn-gradient-secondary text-white btn-secondary">
        S'abonner
      </button>
    </div>
  </section>
);

export default NewsLetter;
