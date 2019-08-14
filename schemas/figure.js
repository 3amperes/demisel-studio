export default {
  name: "figure",
  type: "image",
  options: {
    hotspot: true,
    metadata: ["palette"]
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Texte alternatif",
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "attribution",
      type: "string",
      title: "Attribution"
    }
  ]
};
