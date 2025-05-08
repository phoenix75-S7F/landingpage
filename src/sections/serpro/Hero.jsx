import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "../serpro/MagicButton";
import { Spotlight } from "../serpro/ui/Spotlight";
import { TextGenerateEffect } from "../serpro/ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xl text-center text-p3 max-w-80">
            Ponto Zero Soluções
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Encontre o produto certo para suas necessidades comerciais."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Ampliando nossa atuação no mercado, oferecemos serviços
            especializados para os setores privado e público, baseados em
            informações de governo com oferta de produtos diversificados.
          </p>

          {/* <a href="#about">
            <MagicButton
              title="Sobre Biometria"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
          <div className="py-20">
            <h1 className="heading">
              INOVAÇÃO, EFICIÊNCIA e SEGURANÇA
              {/* <span className="text-p3">ÊNCIA e SEGURANÇA</span> */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
