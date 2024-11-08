import { Element, Link as LinkScroll } from "react-scroll"
import { contacts } from "../constants"
import FormContact from "../components/FormContact"
import Button from "../components/Button"

const Contact = () => {
  return (
    <section>
      {/* <div className="container"> */}
          <div className="max-w-1230 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
               <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto -mt-24 mb-10 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                   Contato
               </h3>
               <p className="body-1 text-center text-p4 -mt-9">
                  Tire suas dúvidas ou envie uma sugestão.
               </p>      

              <div className="h-640 relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">

           
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
                                 className="size-17/20 object-contain z-20"
                               />
                           </div>

                           <h3 className="relative z-1 max-w-40 mx-auto my-0 base-bold text-p3 text-center">
                               {title}
                            </h3>
                       </li>    
                     ))}

                      <FormContact/>


                </ul>
{/* 
                      <LinkScroll to="funcionalidades" offset={-100} spy smooth>
                       <Button icon="/images/zap.svg">
                        Saiba Mais!
                       </Button> 
                      </LinkScroll> */}

              </div>  
              
                    
            
                   
                    
            
            </div>
      {/* </div> */}
    </section>
  )
}

export default Contact

