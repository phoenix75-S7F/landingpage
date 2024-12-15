import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { authFormSchema } from "@/lib/utils";

// import { Control, FieldPath, useForm } from "react-hook-form";

// const formSchema = authFormSchema("sign-up");

// interface CustomInput {
//   control: Control<z.infer<typeof formSchema>>;
//   name: FieldPath<z.infer<typeof formSchema>>;
//   label: string;
//   placeholder: string;
// }

const formSchema = authFormSchema("sign-up");

// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email: "",
    password: ''
  },
});

const CustomInput = ({ control, name, label, placeholder }) => {  

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
