export default {
  name: "config",
  title: "Configuration",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre du site",
      type: "string"
    },
    {
      name: "areDiscountsEnabled",
      title: "Affichage des soldes",
      type: "boolean"
    },
    { name: "banner", title: "Bannière Promo", type: "banner" },
    {
      name: "carousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "slide" }]
    },
    {
      name: "introduction",
      title: "Intoduction",
      type: "article"
    },
    {
      name: "pushes",
      title: "Accès directs",
      type: "pushes"
    },
    {
      name: "menuBaseThumb",
      title: "Vignette de base du sous menu de navgation",
      type: "figure"
    }
  ]
};
