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
      name: "carousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "slide" }]
    }
  ]
};
