const CardCoach = ({ image, name, description }) => (
  <div className="d-flex flex-column flex-sm-row mb-4 shadow p-3">
    <img
      className="img-fluid shadow"
      src="/profile-sidy.jpg"
      style={{ width: 90 + "px", height: 110 + "px" }}
    />
    <div className="ml-sm-3">
      <h4 className="mt-2 text-primary mt-sm-0">Sidy Sidibe</h4>
      <p className="mt-2 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident
        voluptates quidem perferendis enim? Non soluta, reprehenderit tempore
        velit eaque ullam et enim, at ipsum nam eligendi accusantium hic?
        Praesentium.
      </p>
    </div>
  </div>
);

export default CardCoach;
