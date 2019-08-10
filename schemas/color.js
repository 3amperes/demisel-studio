export default {
  name: "color",
  title: "Couleur",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "hexa",
      title: "Hexa",
      type: "string",
      options: {
        maxLength: 6
      }
    }
  ]
};
