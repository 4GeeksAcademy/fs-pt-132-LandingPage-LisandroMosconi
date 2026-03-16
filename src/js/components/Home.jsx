import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


const characterList = [
	{
		title: 'Rossi',
		url: 'https://endfield.wiki.gg/images/Rossi_Splash_Art.png?f5a17e',
		release: 'Release: March 29 2026',
		birth: 'Date Birth: March 10',
		role: 'Guard Physical'
	},
	{
		title: 'Endministrator',
		url: 'https://endfield.wiki.gg/images/Endministrator_%28Male%29_Splash_Art.png?415054=&format=original',
		release: 'Release: January 22 2026',
		birth: 'Date Birth: Undefined',
		role: 'Guard Physical'
	},
	{
		title: 'Gilberta',
		url: 'https://endfield.wiki.gg/images/Gilberta_Splash_Art.png?b6a69f=&format=original',
		release: 'Release: February 7 2026',
		birth: 'Date Birth: November 28',
		role: 'Supporter Nature'
	},
	{
		title: 'Yvone',
		url: 'https://endfield.wiki.gg/images/Yvonne_Splash_Art.png?1fcba7=&format=original',
		release: 'Release: February 24 2026',
		birth: 'Date Birth: May 9',
		role: 'Striker Cryo'
	}
]

const Home = () => {
	return (
		<div className="text-center">

			<Navbar />
			<div className="container py-5">
				<Jumbotron />

				<div className="row">{
					characterList.map((el, i) =>
						<Card key={i} url={el.url} title={el.title} release={el.release} role={el.role} birth={el.birth} />
					)}
				</div>
			</div>
			<Footer />


		</div>
	);
};

export default Home;