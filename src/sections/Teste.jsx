import * as ReactDOM from "react-dom/client";
import { Element, Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { teste, preços } from "../constants";
import Button from "../components/Button";
// import Start from '../components/Start'
import Startpage from "../pages/Startpage";

function handleStart(plan) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const element = <Startpage type={plan} />;
  root.render(element);
}

const Teste = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="preços">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            {/* <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Preços flexíveis para empresas de todos os tamanhos!
            </h3> */}

            {/* <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div> */}
          </div>

          {/* pricing section         */}
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {teste.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    {id == 0 && (
                      <img
                        src={icon}
                        className="size-28 object-contain"
                        alt={title}
                      />
                    )}

                      {id == 1 && (
                      <img
                        src={icon}
                        className="w-full object-contain"
                        alt={title}
                      />
                    )}
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                {/* <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                    {text}
                  </p> */}

                {id == 0 && (
                  <Button icon={button.icon}>
                    <LinkScroll to="contato">{button.title}</LinkScroll>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Teste;
