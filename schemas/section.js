export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
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
      name: "link",
      title: "Lien",
      type: "link"
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
      title: "title"
    }
  }
};
