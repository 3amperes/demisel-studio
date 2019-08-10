export default {
  name: "product",
  title: "Bijoux",
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
      collapsible: true,
      collapsed: true,
      options: {
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
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string"
        }
      ],
      options: {
        layout: "tags"
      }
    },
    {
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: { type: "category" }
    },
    {
      name: "model",
      title: "Modèle",
      type: "reference",
      to: { type: "model" }
    },
    {
      name: "colors",
      title: "Couleurs",
      type: "reference",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "color" }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "thumbnail.image"
    }
  }
};
