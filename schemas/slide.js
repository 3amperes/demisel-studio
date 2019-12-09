export default {
  title: "Slide",
  name: "slide",
  type: "object",
  options: {
    collapsible: true
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "mobileImage",
      title: "Image mobile",
      type: "figure"
    },
    {
      name: "title",
      title: "Titre",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "link",
      title: "Lien",
      type: "link"
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image"
    }
  }
};
