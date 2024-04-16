import { IoHome, IoDocument } from "react-icons/io5";

export const links = [
  {
    title: "Mi compañia",
    label: "",
    icon: IoHome,
    href: "/dashboard",
    enabled: true,
  },
  {
    title: "Facturacion",
    label: "",
    icon: IoDocument,
    href: "/dashboard/regulacion",
    children: [
      {
        title: "Indicadores",
        href: "/dashboard/regulacion/congreso",
      },
      {
        title: "TAC Pedidos",
        href: "/dashboard/regulacion/gobierno",
      },
    ],
    enabled: true,
  }
];
