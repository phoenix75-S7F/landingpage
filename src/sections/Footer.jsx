import * as ReactDOM from 'react-dom/client'
import { socials } from "../constants/index.jsx";
import About from "../components/About.jsx";
import Terms from '../components/Terms.jsx';
import PrivacyPolicy from '../components/PrivacyPolicy.jsx';

function handleAbout() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const element = <About />; 
  root.render(element);
}

function handleTerms() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const element = <Terms />; 
  root.render(element);
}

function handlePolicy() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const element = <PrivacyPolicy />; 
  root.render(element);
}

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex w-full max-md:flex-col">
          <div className="flex items-center justify-center sm:ml-auto ">
            <p onClick={handlePolicy} className="legal-after relative mr-10 text-p5 transition-all duration-1000 hover:text-p1 cursor-pointer">
              Politica de Privacidade
            </p>
            <p onClick={handleTerms} className="legal-after relative mr-10 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Termos de Uso
            </p>

            <p onClick={handleAbout} className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Sobre a Empresa
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-5 py-8">
          <p className="opacity-85 text-p3 font-semibold">
            Ponto Zero © 2024 Todos os Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
