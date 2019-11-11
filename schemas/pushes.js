export default {
  name: "pushes",
  title: "Pushes",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string"
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "text"
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "push" }]
    },
    {
      name: "footer",
      title: "Footer",
      type: "string"
    },
    {
      name: "link",
      title: "Lien",
      type: "link"
    }
  ]
};
