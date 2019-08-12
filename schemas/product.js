export default {
  name: "product",
  title: "Bijou",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nom",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        collapsible: true,
        collapsed: true,
        source: "title",
        maxLength: 96
      }
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
      name: "model",
      title: "Modèle",
      type: "reference",
      to: { type: "model" }
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "model.title",
      manufactor: "manufactor.title",
      media: "thumbnail.image"
    }
  }
};
