import { BookTextIcon, HomeIcon } from "lucide-react";


export const links = [
  {
    title: "Mi compañia",
    label: "",
    icon: HomeIcon,
    href: "/dashboard",
    enabled: true,
  },
  {
    title: "Facturacion",
    label: "",
    icon: BookTextIcon,
    href: "",
    children: [
      {
        title: "Indicadores",
        href: "/dashboard/facturacion/indicadores",
      },
      {
        title: "TAC Pedidos",
        href: "/dashboard/facturacion/tac-pedidos",
      },
    ],
    enabled: true,
  }
];
