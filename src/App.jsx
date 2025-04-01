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
// ReactGA.initialize('G-3R73RWRF6Z');

const App = () => {

	useEffect(() => {
		// ReactGA.send({ hitType: "http://localhost:5173/", page: window.location.pathname });
		ReactGA.send({ hitType: "pageview", page: "https://pontozerosolucoes.com.br/", title: "Ponto Zero Soluções" });
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
