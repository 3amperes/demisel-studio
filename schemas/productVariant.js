export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false
  },
  fields: [
    {
      title: "Title",
      name: "title",
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
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string"
        }
      ],
      options: {
        layout: "tags"
      }
    },
    {
      name: "collection",
      title: "Collection",
      type: "reference",
      to: { type: "collection" }
    }
  ]
};
