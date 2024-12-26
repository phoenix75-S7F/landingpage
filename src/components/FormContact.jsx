import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { Element, Link as LinkScroll } from "react-scroll"
import Button from "./Button"
import emailjs from "@emailjs/browser"
import ToastAnimated, { showToast } from "../ui-lib/toast";


const FormContact = () => {
    // const [agreed, setAgreed] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
      console.log(e)
      e.preventDefault()

      if(name === '' || email === '' || fone === '' || message === ''){
        showToast({ type: "warn", message: "Preencha todos os campos!" });
        return
      }

      const templateParams = {
        from_name: name,
        email: email,
        message: message,
        fone: fone
      }

      emailjs.send("service_7bvq7dh", "template_vzgb7vo", templateParams, "BxIzwYwqoiuEbBRSB")
                                                                           
      .then((response) => {
          // console.log("Email recebido com sucesso!", response.status, response.text)
          showToast({ type: "success", message: "E-mail enviado com sucesso" });
          setName('')
          setEmail('')
          setMessage('')
          setFone('')
      }, (err) => {
        showToast({ type: "error", message: "Ocorreu um erro!" });
      })
    
    }

    return (
      // <div className="container">
      //  className="mx-auto mt-16 max-w-xl sm:mt-48"
      <section>
       <div className="container mx-auto mt-8 mb-0 text-left">
        <form className="mt-10 flex flex-col gap-0 xl:max-w-xs " onSubmit={sendEmail}>
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
                  placeholder="João Silva"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  placeholder="joão@email.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  placeholder="(00) 00000-0000"
                  autoComplete="fone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => setFone(e.target.value)}
                  value={fone}
                />
              </div>
            </div>

             {/* <div className="2xl:ml-80 xs:ml-32 -mr-512 xs:-mr-512 -mt-60"></div> */}
             {/* <div className="2xl:ml-80 xs:ml-80 -mr-512 xs:-mr-512 -mt-60"></div> */}
         
            <div className="2xl:ml-80 sm:ml-36 md:ml-56 lg:ml-48 xl:ml-52 xs:ml-24 ls:ml-24 -mt-60">
              <label htmlFor="message" className="text-sm/6 font-semibold text-p3">
                Messagem
              </label>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Seu texto"
                  rows={8}                  
                  className="2xl:w-440 sm:w-36 md:w-96 lg:w-48 xl:w-52 ls:w-72 xs:w-36 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"                 
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
            </div>



            {/* <LinkScroll to="funcionalidades" offset={-100} spy smooth> */}
            <ToastAnimated />
               <Button icon="/images/zap.svg" type="submit" value="Enviar">
                   Enviar
               </Button> 
            {/* </LinkScroll> */}

         
          {/* </div> */}
       
        </form>
       </div>  
      </section>     
      // </div>

     

    )
  }


export default FormContact