import { FiLayers } from "react-icons/fi";

export default {
  name: "model",
  title: "Modèle",
  type: "document",
  icon: FiLayers,
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
      categoryName: "category.shortName",
      media: "thumbnail"
    },
    prepare(selection) {
      const { title, categoryName, media } = selection;
      return {
        title: title,
        subtitle: categoryName,
        media: media
      };
    }
  }
};
