export default {
  name: "collectionItem",
  title: "Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "img1",
      title: "image titre",
      type: "figure"
    },
    {
      name: "img2",
      title: "image portée",
      type: "figure"
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
      subtitle: "model.title",
      media: "img2"
    }
  }
};
