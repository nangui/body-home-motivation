const CardObjectif = ({ img, name, description }) => (
  <div className="p-2" data-tilt>
    <div className="card-objectif position-relative">
      <img src={img} alt="objectif" className="position-absolute img-fluid" />
      <div className="position-absolute objectif-footer p-3 text-center">
        <h2 className="text-uppercase text-white">{name}</h2>
        <p className="text-white-50 font-weight-light">{description}</p>
      </div>
    </div>
  </div>
);

export default CardObjectif;
