import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">

        <p className="mb-1">
          © 2026 Landing Page. All rights reserved.
        </p>

        <p className="mb-2">
          Created by Lisandro Mosconi
        </p>

        <div>
          <a href="#" className="text-light me-3 text-decoration-none">
            Privacy Policy
          </a>

          <a href="#" className="text-light me-3 text-decoration-none">
            Terms of Service
          </a>

          <a href="#" className="text-light text-decoration-none">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;