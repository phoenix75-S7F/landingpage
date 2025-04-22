"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { Element } from "react-scroll";
// import { projetos } from "../../constants/index";
import { projetos } from "../../data";
import { PinContainer } from "./ui/Pin";

console.log("PROJETOS");
console.log(projetos);

const Transito = () => {
  return (
    <section>
      <Element name="transito">
        <div className="py-20">
          <h1 className="heading">
            Soluções relacionadas ao Trânsito
            {/* <span className="text-p3">Trânsito</span> */}
          </h1>
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projetos.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}>
                <PinContainer
                  title={item.link}
                  href="https://twitter.com/mannupaaji">
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}>
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 w-full h-full rounded-3xl"
                    />
                  </div>

                  {/* <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"> */}
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                    {item.title}
                  </h1>

                  {/* <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}>
                    {item.des}
                  </p> */}

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm"
                    style={{
                      color: "#BEC1DD",
                      // margin: "1vh 0",
                    }}>
                    {item.des}
                  </p>

                  {/* <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}>
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div> */}
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Transito;
