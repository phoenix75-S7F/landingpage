// import { Link } from "react-router-dom";
// import Image from "next/image";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import clsx from "clsx";

// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import Button from "./Button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const handleLoggOut = () => {
  window.location = "/";
};

const Start = (plan) => {
  const form = useForm();

  console.log(plan)
  const planos = {
    title: plan.plan.type.title,
    price: plan.plan.type.priceMonthly,
  };

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
        <Form {...form}>
          <form className="space-y-6">
            {/* {type === "sign-up" && ( */}
            <>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="Nome"
                  placeholder="Nome"
                />

                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Sobrenome"
                  placeholder="Sobrenome"
                />
              </div>

              <CustomInput
                control={form.control}
                name="address1"
                label="Endereço"
                placeholder="Entre com seu endereço"
              />

              <CustomInput
                control={form.control}
                name="city"
                label="Municipio"
                placeholder="Entre com seu municipio"
              />

              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="UF"
                  placeholder="Ex: SP"
                />

                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="CEP"
                  placeholder="Entre com CEP"
                />
              </div>
              {/* <div className="flex gap-4"> */}
              <CustomInput
                control={form.control}
                name="company"
                label="Empresa"
                placeholder="Ponto Zero Soluções"
              />

              {/* <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Ex: 1234"
                /> */}
              {/* </div> */}
              {/* {preços.map((plan, index) => ( */}
              <div className="mt-8 text-center">
                <h1 className="text-p3 font-bold">Sua escolha foi o plano:</h1>
              </div>

              <div
                className={clsx(
                  "small-2 rounded-20 relative z-2 mb-6 border-2 font-bold px-4 py-1.5 uppercase",
                  1 === 2 ? "border-p3 text-p3 text-center" : "border-p1 text-p1 text-center",
                )}>
                {planos.title} - R$ {planos.price},00 Mês/Ano
              </div>

              {/* ))} */}
            </>

            {/* <CustomInput
              control={form.control}
              name="email"
              label="E-mail"
              placeholder="Entre com seu email"
            />

            <CustomInput
              control={form.control}
              name="password"
              label="Senha"
              placeholder="Entre com sua senha"
            /> */}
            {/* <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="form-btn">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Entrar"
                ) : (
                  "Cadastrar"
                )}
              </Button>
            </div> */}
          </form>
        </Form>

        <Button className="mt-2" href="/">
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
      </>
    </section>
  );
};

export default Start;
