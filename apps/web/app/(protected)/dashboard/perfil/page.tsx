'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Avatar,
  AvatarFallback,
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Stack,
  Typography,
} from "@/src/components";

import { refinedPassword } from "@/src/lib/validations";

const FormSchema = z.object({
    username: z.string(),
    password: refinedPassword,
    repeat: refinedPassword,
  })
  .refine((data) => data.password === data.repeat, {
    path: ["repeat"],
    message: "Las contraseñas no coinciden",
  });

type FormData = z.infer<typeof FormSchema>;

const useProfileForm = () => {
    const form = useForm<FormData>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: "",
        password: "",
        repeat: "",
      },
    });
  
    return form;
  };

export default function Profile() {
    const form = useProfileForm();
    const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  return (
    <Stack>
      <Card className="rounded-lg">
        <Card.Title>Mi Perfil</Card.Title>
        <Stack className="mt-4" spacing="md">
          <Stack direction="row" spacing="md">
            <Avatar className="w-24 h-24 rounded-dot">
              <AvatarFallback className="rounded-none text-3xl">{`HR`}</AvatarFallback>
            </Avatar>
            <Stack>
              <Typography variant="h3">Henrique Restrepo alvares</Typography>
              <Typography variant="h6">Administrador</Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Stack>
              <Typography variant="caption" weight={500}>
                Mi correo electrónico
              </Typography>
              <Input
                placeholder="name@example.com"
                type="email"
                disabled={true}
                className="w-96"
              />
            </Stack>
          </Stack>
          <Form {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <Stack>
                  <FormLabel>Usuario</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="text"
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
            <FormField
              control={form.control}
              name="repeat"
              render={({ field }) => (
                <Stack>
                  <FormLabel>Confirma la contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      data-testid="repeat"
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
              className="w-64 mx-auto text-center justify-center"
            >
              {false ? "Cargando..." : "Ingresar"}
            </Button>
          </Form>
        </Stack>
      </Card>
    </Stack>
  );
}
