import React from "react";
import { navItems } from "../data";
import FloatingNav from "../sections/serpro/ui/FloatingNavbar";
import Hero from "../sections/serpro/Hero";
import Grid from "../sections/serpro/Grid";
// import RecentProjects from "../sections/serpro/RecentProjects"
// import Clients from "../sections/serpro/Clients"
import Experience from "../sections/serpro/Experience"
// import Approach from "../sections/serpro/Approach"
import Footer from "../sections/serpro/Footer"

const Serpro = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects />  */}
        {/* <Clients />  */}
        <Experience /> 
        {/* <Approach />  */}
        <Footer />
      </div>
    </main>
  );
};

export default Serpro;
