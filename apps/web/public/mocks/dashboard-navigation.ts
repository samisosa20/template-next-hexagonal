export const links = [
  {
    title: "Mi Dapper",
    label: "",
    icon: require("public/static/images/dashboard/navigation/home.svg"),
    href: "/dashboard",
    enabled: true,
  },
  {
    title: "Regulación",
    label: "",
    icon: require("public/static/images/dashboard/navigation/regulation.svg"),
    href: "/dashboard/regulacion",
    children: [
      {
        title: "Congreso",
        href: "/dashboard/regulacion/congreso",
      },
      {
        title: "Gobierno",
        href: "/dashboard/regulacion/gobierno",
      },
    ],
    enabled: true,
  },
  {
    title: "Economía",
    label: "",
    icon: require("public/static/images/dashboard/navigation/economy.svg"),
    href: "/dashboard/economia",
    enabled: true,
  },
  {
    title: "Sostenibilidad",
    label: "",
    icon: require("/public/static/images/dashboard/navigation/sustainability.svg"),
    href: "/dashboard/sostenibilidad",
    enabled: true,
    children: [
      {
        title: "Tablero general",
        href: "/dashboard/sostenibilidad/tablero-general",
      },
      {
        title: "Ambiental",
        href: "/dashboard/sostenibilidad/ambiental",
      },
      {
        title: "Social",
        href: "/dashboard/sostenibilidad/social",
      },
      {
        title: "Gobierno Corporativo",
        href: "/dashboard/sostenibilidad/gobernanza-corporativa",
      },
    ],
  },
  {
    title: "Ciudades",
    label: "",
    icon: require("public/static/images/dashboard/navigation/city.svg"),
    href: "/dashboard/local",
    enabled: true,
  },
  {
    title: "PolifonÍA",
    label: "",
    icon: require("public/static/images/dashboard/navigation/polifonia.svg"),
    href: "/dashboard/polifonia",
    enabled: true,
  },
  {
    title: "Informes Dapper",
    label: "",
    icon: require("public/static/images/dashboard/navigation/reports.svg"),
    href: "/dashboard/informes",
    enabled: true,
  },
  {
    title: "Noticias",
    label: "",
    icon: require("public/static/images/dashboard/navigation/news.svg"),
    href: "/dashboard/noticias",
    enabled: true,
  },
  {
    title: "Información educativa",
    label: "",
    icon: require("public/static/images/dashboard/navigation/abc.svg"),
    href: "/dashboard/abc",
    enabled: true,
  },
  {
    title: "Mi lista de lectura",
    label: "",
    icon: require("public/static/images/dashboard/navigation/bookmark.png"),
    href: "/dashboard/lista-de-lectura",
    enabled: true,
    hideDesktop: true,
  },
];
