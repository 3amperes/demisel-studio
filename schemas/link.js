/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Lien",
  name: "link",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Intitulé",
      type: "string"
    },
    {
      name: "url",
      title: "Lien",
      type: "url",
      validation: Rule => Rule.uri({ allowRelative: true })
    }
  ]
};
