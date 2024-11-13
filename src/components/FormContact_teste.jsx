import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { Element, Link as LinkScroll } from "react-scroll"
// import Button from "../components/Button"
import emailjs from "@emailjs/browser"
import ToastAnimated, { showToast } from "../ui-lib/toast";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";


const FormContact = () => {
    // const [agreed, setAgreed] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
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

      emailjs.send("service_z062miu", "template_bzpor6f", templateParams, "R8Xiy43s_H_5neZ98")
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

     <section >
       <div className="container mx-auto mt-8 mb-0 text-center">
         
          <form action="#" className="flex flex-col gap-4 lg:max-w-sm" >
           
            <div className="grid grid-cols-2 gap-4">
              <div>
                 <label htmlFor="seu-nome" className="block text-sm/6 font-semibold text-p3">
                    Seu Nome
                 </label>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
     
     </section>
    )
  }


export default FormContact