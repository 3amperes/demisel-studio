export default {
  name: "push",
  title: "Push",
  type: "object",
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
      type: "url",
      validation: Rule => Rule.uri({ allowRelative: true })
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail"
    }
  }
};
