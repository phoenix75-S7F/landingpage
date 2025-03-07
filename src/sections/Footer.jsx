import * as ReactDOM from "react-dom/client";
import { socials } from "../constants/index.jsx";
import About from "../components/About.jsx";
import Terms from "../components/Terms.jsx";
import PrivacyPolicy from "../components/PrivacyPolicy.jsx";

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
            <p
              onClick={handlePolicy}
              className="legal-after relative mr-10 text-p5 transition-all duration-1000 hover:text-p1 cursor-pointer">
              Politica de Privacidade
            </p>
            <p
              onClick={handleTerms}
              className="legal-after relative mr-10 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Termos de Uso
            </p>

            <p
              onClick={handleAbout}
              className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Sobre a Empresa
            </p>
          </div>

          <ul className="flex flex-1 items-center justify-center gap-1 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-8 object-contain -ml-80 py-1 xl:-ml-72 xs:-ml-32"
                  />
                   <p className="text-p5 transition-all duration-500 hover:text-p3 py-1 ml-2 xs:-ml-0 ">{title}</p>
                </a>               
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-5 py-8">
          <p className="opacity-85 text-p3 font-semibold">
            Ponto Zero © 2025 Todos os Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
