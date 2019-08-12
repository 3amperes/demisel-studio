export default {
  name: "model",
  title: "Modèle",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
    },
    {
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: { type: "category" }
    },
    {
      name: "description",
      title: "Description",
      type: "richText"
    },
    {
      name: "specification",
      title: "Spécification",
      type: "text"
    },
    {
      name: "price",
      title: "Prix",
      type: "price",
      collapsible: true,
      collapsed: false
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "figure" }]
    }
  ]
};
