export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nom",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      title: "variante par défault",
      name: "defaultProductVariant",
      type: "productVariant"
    },
    {
      title: "Variantes",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variante",
          type: "productVariant"
        }
      ]
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" }
        }
      ]
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]"
    }
  }
};
