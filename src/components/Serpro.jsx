import React from "react";
import { navItems } from "../data";
import HeaderSerpro from "../sections/HeaderSerpro"

import Hero from "../sections/serpro/Hero";
import Biometria from "../sections/serpro/Grid";
import Transito from "../sections/serpro/RecentProjects"
// import Clients from "../sections/serpro/Clients"
import Contact from "../sections/Contact"
// import Experience from "../sections/serpro/Experience"
import Ficalizacao from "../sections/serpro/Approach"
import Footer from "../sections/Footer"
// import FloatingNav from "../sections/serpro/FloatingNavbar";

const Serpro = () => {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <HeaderSerpro navItems={navItems} />
        <Hero />       
        <Biometria />
        <Transito />        
        <Ficalizacao /> 
        {/* <Experience /> 
        <Clients />          */}
        <Contact />	
        <Footer />
      </div>
    </main>
  );
};

export default Serpro;
