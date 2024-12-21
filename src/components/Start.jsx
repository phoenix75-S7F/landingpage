import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import ToastAnimated, { showToast } from "../ui-lib/toast";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

const handleLoggOut = () => {
  window.location = "/";
};

const Start = (plan) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [fone, setFone] = useState("");

  const planos = {
    id: plan.plan.type.id,
    title: plan.plan.type.title,
    price: plan.plan.type.priceMonthly,
  };

  function sendEmail(e) {
    console.log(e);
    e.preventDefault();

    if (
      firstname === "" ||
      lastname === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      postalcode === "" ||
      company === "" ||
      email === "" ||
      fone === ""
    ) {
      showToast({ type: "warn", message: "Preencha todos os campos!" });
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
      fone: fone,
    };

    emailjs
      .send(
        "service_z062miu",
        "template_bzpor6f",
        templateParams,
        "R8Xiy43s_H_5neZ98",
      )
      .then(
        (response) => {
          // console.log("Email recebido com sucesso!", response.status, response.text)
          showToast({ type: "success", message: "E-mail enviado com sucesso" });
          setFirstName("");
          setLastName("");
          setAddress("");
          setCity("");
          setState("");
          setPostalCode("");
          setCompany("");
          setEmail("");
        },
        (err) => {
          showToast({ type: "error", message: "Ocorreu um erro!" });
        },
      );
  }

  return (
    <section className="auth-form-1">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="cursor-pointer flex items-center gap-1 -mt-10">
          <img
            src="/images/pzero.png"
            width={260}
            height={280}
            alt="pzero"
            className="relative p-8"
          />
        </div>
      </header>
      <div className="p-0 -mt-10 gap-1 md:gap-3">
        <p className="text-16 font-semibold text-center text-p3">
          Por Favor, entre com seus Dados
        </p>
      </div>

      <>
        <form className="space-y-6" onSubmit={sendEmail}>
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="form-label">
                  Nome
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="first-name"
                    className="input-class"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstname}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="form-label">
                  Sobrenome
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="last-name"
                    className="input-class"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="endereço" className="form-label">
                  Endereço
                </label>

                <div className="mt-1">
                  <input
                    type="text"
                    id="endereço"
                    className="input-class"
                    name="endereço"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="municipio" className="form-label">
                  Municipio
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="municipio"
                    className="input-class"
                    name="municipio"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="state" className="form-label">
                  UF
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="state"
                    className="input-class"
                    name="state"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cep" className="form-label">
                  CEP
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="cep"
                    className="input-class"
                    name="cep"
                    onChange={(e) => setPostalCode(e.target.value)}
                    value={postalcode}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="empresa" className="form-label">
                  Empresa
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="empresa"
                    className="input-class"
                    name="empresa"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="email"
                    className="input-class"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              {/* <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div class="mt-2.5">
                  <textarea
                    id="message"
                    rows="4"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="message"></textarea>
                </div>
              </div> */}
            </div>
          </div>

          <div className="mt-2 text-center">
            <h1 className="text-p3 font-bold">Sua escolha foi o plano:</h1>
          </div>

          <div
            className={clsx(
              "small-2 rounded-20 relative z-2 -mb-4 border-2 font-bold px-4 py-1.5 uppercase",
              planos.id === "1"
                ? "border-p3 text-p3 text-center font-semibold"
                : "border-p1 text-p1 text-center font-semibold",
            )}>
            {planos.title} - R$ {planos.price},00 Mês
          </div>

          <ToastAnimated />
          <Button icon="/images/zap.svg" type="submit" value="Enviar">
            Enviar
          </Button>

          <footer className="footer">
            <div className="footer_image" onClick={handleLoggOut}>
              <img src="/images/logout.svg" alt="phx" />
            </div>
            <p
              className="text-16 cursor-pointer font-semibold text-center text-p3"
              onClick={handleLoggOut}>
              Voltar
            </p>
          </footer>
        </form>
      </>
    </section>
  );
};

export default Start;
