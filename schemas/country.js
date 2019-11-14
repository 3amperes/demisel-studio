export default {
  name: "country",
  title: "Pays",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string"
    },
    {
      name: "outlets",
      title: "Revendeurs",
      type: "array",
      of: [
        {
          type: "outlet"
        }
      ]
    }
  ]
};
