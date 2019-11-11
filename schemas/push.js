export default {
  name: "push",
  title: "Push",
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
      name: "link",
      title: "Lien",
      type: "url"
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail"
    }
  }
};
