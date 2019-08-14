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
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: { type: "category" }
    },
    {
      name: "thumbnail",
      title: "Vignette",
      type: "figure"
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
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail.image"
    }
  }
};
