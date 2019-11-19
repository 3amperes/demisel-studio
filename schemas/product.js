export default {
  name: "product",
  title: "Bijou",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nom",
      type: "string",
      validation: Rule => Rule.required().warning("Obligatoire")
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     collapsible: true,
    //     collapsed: true,
    //     source: "title",
    //     maxLength: 96
    //   }
    // },
    {
      name: "category",
      title: "Catégorie",
      type: "reference",
      validation: Rule => Rule.required().warning("Obligatoire"),
      to: [{ type: "category" }]
    },
    {
      name: "model",
      title: "Modèle",
      type: "reference",
      description: "un modèle ?",
      to: [{ type: "model" }]
    },
    {
      name: "collections",
      title: "Collections",
      type: "array",
      validation: Rule => Rule.unique(),
      options: {
        layout: "list",
        editModal: "dialog"
      },
      of: [
        {
          type: "reference",
          to: [{ type: "collection" }]
        }
      ]
    },
    {
      name: "colors",
      title: "Couleurs",
      type: "array",
      validation: Rule => Rule.unique(),
      options: {
        layout: "list",
        editModal: "popover"
      },
      of: [
        {
          type: "reference",
          to: [{ type: "productColor" }]
        }
      ]
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
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "model.title",
      media: "thumbnail"
    }
  }
};
