import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<Navbar />
			<div className="container py-5">
			<Jumbotron />
			</div>
		</div>
	);
};

export default Home;