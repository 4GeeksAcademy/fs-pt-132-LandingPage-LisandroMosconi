import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 jumbotronColor rounded-3">
      <div className="container py-5 text-start">
        <h1 className="display-5 fw-bold">Full character list and releases</h1>

        <p className="col-sm-12 col-md-8 col-lg-6 fs-5">
          Here is a list with small details about the characters, their role and element.
          Feel free to check on the main website by clicking the button below.
        </p>

        <a
          href="https://endfield.gryphline.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn arknightsButton btn-lg"
        >
          Arknights Endfield Web
        </a>

      </div>
    </div>
  );
};

export default Jumbotron

