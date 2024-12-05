import React from "react";

//include images into your bundle
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>   
		<Jumbotron/>
		<Card/>
		<Footer/>
		</>
	);
};

export default Home;
