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
    }
  ]
};
