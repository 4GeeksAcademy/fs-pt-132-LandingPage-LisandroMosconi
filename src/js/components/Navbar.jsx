import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbarColor fw-bold">
            <div className="container">

                <a className="navbar-brand" href="#">Arknights Endfield</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Dropdown link
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else</a></li>
                            </ul>

                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
