import * as z from "zod";

export const passwordRegex =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/g;

export const emailSchema = z
  .string()
  .min(1, {
    message: "El correo electrónico es requerido",
  })
  .email({
    message: "El correo electrónico no es válido",
  });

export const refinedPassword = z
  .string()
  .min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  })
  .max(40, {
    message: "La contraseña debe tener menos de 40 caracteres",
  });

export const createPasswordSchema = z
  .object({
    password: refinedPassword.refine((value) => passwordRegex.test(value), {
      message:
        "La contraseña debe contener al menos un número, una letra minúscula, una letra mayúscula y un carácter especial",
    }),

    repeat: z.string().min(1, {
      message: "La contraseña es requerida",
    }),
  })
  .refine((data) => data.password === data.repeat, {
    path: ["repeat"],
    message: "Las contraseñas no coinciden",
  });

const phoneRegex = new RegExp(/^(|\d{7,10})$/);

export const phoneSchema = z
  .string()
  .regex(phoneRegex, "Debe ingresar un número de 7 o 10 dígitos");
