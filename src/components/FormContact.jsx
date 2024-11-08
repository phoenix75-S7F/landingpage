import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { Element, Link as LinkScroll } from "react-scroll"
import Button from "../components/Button"

const FormContact = () => {
    const [agreed, setAgreed] = useState(false)

    return (
      // <div className="container">
      //  className="mx-auto mt-16 max-w-xl sm:mt-48"
       
        <form action="#" method="POST"  className="mt-10">
          {/* <div className="grid justify-items-start grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"> */}
            <div>
              <label htmlFor="seu-nome" className="block text-sm/6 font-semibold text-p3">
                Seu Nome
              </label>
              <div className="mb-4">
                <input
                  id="seu-name"
                  name="seu-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>           
          
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-p3">
                E-mail
              </label>
              <div className="mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="fone" className="block text-sm/6 font-semibold text-p3">
                Telefone
              </label>
              <div className="mb-4">
                <input
                  id="fone"
                  name="fone"
                  type="fone"
                  autoComplete="fone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
         
            <div className="ml-80 -mr-512 -mt-60">
              <label htmlFor="messagem" className="block text-sm/6 font-semibold text-p3">
                Messagem
              </label>
              <div className="mb-4">
                <textarea
                  id="messagem"
                  name="messagem"
                  rows={8}                  
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>



            <LinkScroll to="funcionalidades" offset={-100} spy smooth>
               <Button icon="/images/zap.svg">
                   Saiba Mais!
               </Button> 
            </LinkScroll>

         
          {/* </div> */}
       
        </form>
      // </div>
    )
  }


export default FormContact