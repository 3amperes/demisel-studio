export default {
  name: "collection",
  title: "Collection",
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
      validation: Rule => Rule.required().warning("Obligatoire"),
      options: {
        source: "title",
        maxLength: 96
      }
    },
    { name: "order", title: "Ordre d'affichage", type: "number" },
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
