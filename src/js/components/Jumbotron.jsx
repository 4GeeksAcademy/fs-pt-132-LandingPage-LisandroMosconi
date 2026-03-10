import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-body-secondary rounded-3">
      <div className="container py-5 text-start">
        <h1 className="display-5 fw-bold">Jumbotron</h1>

        <p className="col-md-8 fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore eos suscipit?
          Nesciunt inventore ea cumque! Minima facere fugit necessitatibus nihil reprehenderit!
          Accusamus consequatur quas quia vel doloribus sunt rerum.
        </p>

        <button className="btn btn-primary btn-lg">
          Jumboclick
        </button>

      </div>
    </div>
  );
};

export default Jumbotron