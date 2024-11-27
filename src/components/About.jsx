import * as ReactDOM from 'react-dom/client'
import { Element, Link as LinkScroll } from "react-scroll";
import { detailsAbout, sobre } from "../constants";
import { StrictMode } from 'react'
import App from '../App.jsx'
import '../index.css'
import Button from "./Button";


function homePage() {

  const root = ReactDOM.createRoot(document.getElementById("root"));
  // const element = <Header />; 
  root.render( <StrictMode>
    <App />
  </StrictMode>,);
}
const About = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="funcionalidades">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {sobre.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-auto  max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
                <div className="w-full flex justify-center items-center">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    {/* <div className="w-0.5 h-16 bg-s3" /> */}

                    <img
                      src={icon}
                      className="size-60 object-contain"
                      alt={title}
                    />
                  </div>
                </div>
                {/* <p className="caption mb-5 max-md:mb-6">{caption}</p> */}
                <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                  <h2 className="max-w-512 mb-7 h3 text-p3 text-center justify-between max-md:mb-6 max-md:h5">
                    {title}
                  </h2>
                </div>
                <div className=" mb-12 flex items-center justify-center flex-col">
                  {/* <p className="max-w-screen-sm justify-items-center mb-11 body-1 max-md:mb-8 max-md:body-3"> */}
                  <p className="flex -mt-12 text-[22px] text-purple-200 text-center ">
                    {text}
                  </p>
                </div>
                <Button icon={button.icon} onClick={homePage}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {detailsAbout.map(({ id, icon, caption, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div
                    className="flex items-center justify-center mx-auto 
                                   mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-p3 text-center uppercase">
                    {caption}
                  </h3>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
