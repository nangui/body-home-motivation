const TestimonialCard = () => (
  <div className="bg-white shadow-sm p-3 d-flex flex-column justify-content-center align-items-center">
    <p>
      « At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
      quas molestias excepturi sint occaecati cupiditate non provident,
      similique sunt in culpa qui officia deserunt mollitia animi, id est
      laborum et dolorum fuga »
    </p>
    <div className="d-flex justify-content-end align-items-center align-self-end">
      <div className="details mr-4">
        <h3 className="text-primary font-weight-bold">Minceur</h3>
        <h6>Nom prenom</h6>
      </div>
      <img
        src="/profile-kine.jpg"
        alt="testimonial de kaya"
        className="img-fluid"
      />
    </div>
  </div>
);

export default TestimonialCard;
