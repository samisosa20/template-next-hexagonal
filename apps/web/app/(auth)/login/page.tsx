"use client"
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { emailSchema, refinedPassword } from "@/src/lib/validations";

import { Button, Card, Form, FormControl, FormField, FormLabel, FormMessage, Input, Stack, Typography } from "@/src/components";

const FormSchema = z.object({
    email: emailSchema,
    password: refinedPassword,
    remember: z.boolean(),
  });
  
  type FormData = z.infer<typeof FormSchema>;

const useLoginForm = () => {
    const form = useForm<FormData>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
        password: "",
        remember: false,
      },
    });
  
    return form;
  };

export default function Login() {
    const form = useLoginForm();

    return <Card className="p-10 gap-6 w-full max-w-md rounded-xl shadow-lg">
    <Typography variant="title" family="secondary" component="h1" weight={600} color="primary" className="text-center">Ingresa</Typography>
    <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
                 <Typography variant="caption" family="sans" className="bg-white px-3">Con tu correo electrónico</Typography>
          </div>
        </div>

    <Form {...form}>
        <Stack spacing="sm">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <Stack >
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        data-testid="email"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </Stack>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <Stack>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="********"
                        type="password"
                        data-testid="password"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </Stack>
                )}
            />
            {/* Submit */}
            <Button
              disabled={null !== null}
              data-testid="submit"
              type="submit"
              className="w-full text-center justify-center"
            >
              {false ? "Cargando..." : "Ingresar"}
            </Button>
        </Stack>
    </Form>
</Card>
}