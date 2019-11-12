export default {
  name: "article",
  title: "Article",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "description",
      title: "Description",
      type: "richText"
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail"
    }
  }
};
