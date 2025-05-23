import { Element, Link as LinkScroll } from "react-scroll"
import { contacts } from "../constants"
import FormContact from "../components/FormContact"


const Contact = () => {
  return (
    <section>
      {/* <div className="container"> */}
        <Element name="contato" className="relative">
        <div className="container relative z-2 py-28"> 
          <div className="max-w-1230 faq-line_after faq-glow_before relative mx-auto border-s2 bg-s1/50 pt-28 max-xl:max-w-4xl max-lg:border-none max-sm:pb-32 max-w-80::pt-16">
               <h3 className="h3 max-lg:h4 max-sm:h5 z-3 relative mx-auto -mt-24 mb-10 max-w-lg text-center text-p4 max-md:mb-11 max-xs:max-w-80">
                   Contato
               </h3>
               <p className="body-1 text-center text-p4 -mt-9">
                  Tire suas dúvidas ou envie uma sugestão.
               </p>      

              <div className="h-640 relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-w-80:hidden">

           
               <ul className="h-56 grid grid-cols-3 gap-4 content-center mt-48">
                   <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />                     
                       {contacts.map(({id, icon, title}) => (
                       <li key={id} className="relative pt-16 px-4 ">
                           <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10"/>

                           <div className="flex items-center justify-center mx-auto 
                                 mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                               <img 
                                 src={icon}
                                 alt={title}
                                 className="size-15/20 object-contain z-20 rounded-full hover:bg-amber-400"
                               />
                           </div>

                           <h3 className="relative z-1 max-w-80 mx-auto my-0 xl:base-bold xs:base-bold-2 text-p3 text-center">
                               {title}
                           </h3>
                       </li>    
                     ))}
                   
                     <FormContact/>                 

                </ul>
              </div> 
            </div>
       </div>
      </Element>
    </section>
  )
}

export default Contact

