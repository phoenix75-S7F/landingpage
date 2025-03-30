import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
// import Testimonials from "./sections/Testimonials"
// import Home from "./pages/Serpropage"
import Download from "./sections/Download";
import Contact from "./sections/Contact"
import Footer from "./sections/Footer";
import ReactGA from 'react-ga4';
import { useEffect } from "react";

ReactGA.initialize('G-86ZW3M417E');

const App = () => {

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: window.location.pathname });
	  }, []);

	return (
		<main className="overflow-hidden">
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			{/* <Home /> */}
			{/* <Testimonials /> */}
			<Download />
			<Contact />			
			<Footer />
		</main>
	);
};

export default App;
