import { FiCamera } from "react-icons/fi";

export default {
  name: "collection",
  title: "Collection",
  type: "document",
  icon: FiCamera,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "editorial",
      title: "Éditorial ?",
      description: "Afficher cette collection dans la partie éditoriale",
      type: "boolean"
    },
    { name: "order", title: "Ordre d'affichage", type: "number" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      collapsible: true,
      description: "un nom court pour les url : /collection/slug",
      validation: Rule => Rule.required().warning("Obligatoire"),
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
      name: "mobileThumbnail",
      title: "Vignette pour le mobile",
      type: "figure"
    },
    {
      name: "description",
      title: "Description",
      type: "richText"
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      options: {
        layout: "list",
        editModal: "dialog"
      },
      of: [{ type: "collectionItem" }]
    }
  ]
};
