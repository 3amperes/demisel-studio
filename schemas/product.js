import { FiFeather } from "react-icons/fi";

export default {
  name: "product",
  title: "Bijou",
  type: "document",
  icon: FiFeather,
  fields: [
    {
      name: "model",
      title: "Modèle",
      type: "reference",
      to: [{ type: "model" }]
    },
    {
      name: "title",
      title: "Variante",
      type: "string",
      validation: Rule => Rule.required().warning("Obligatoire")
    },
    {
      name: "category",
      title: "Catégorie",
      type: "reference",
      validation: Rule => Rule.required().warning("Obligatoire"),
      to: [{ type: "category" }]
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
      modelTitle: "model.title",
      categoryName: "category.shortName",
      media: "thumbnail"
    },
    prepare(selection) {
      const { title, modelTitle, categoryName, media } = selection;
      return {
        title: `${title}`,
        subtitle: `${categoryName} ${modelTitle}`,
        media: media
      };
    }
  }
};
