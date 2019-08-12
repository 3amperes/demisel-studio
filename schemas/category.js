export default {
  name: "category",
  title: "Catégorie",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string"
    },
    {
      name: "shortName",
      title: "Title court",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }
  ]
};
