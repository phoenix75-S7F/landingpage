import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials"
import Download from "./sections/Download";
import Contact from "./sections/Contact"
import Footer from "./sections/Footer";

const App = () => {
	return (
		<main className="overflow-hidden">
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Testimonials />
			<Download />
			<Contact />			
			<Footer />
		</main>
	);
};

export default App;
