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
  title: "Prix",
  name: "price",
  type: "object",
  fields: [
    {
      name: "unitPrice",
      type: "number",
      title: "Prix unitaire"
    },
    {
      name: "proPrice",
      type: "number",
      title: "Prix pro"
    },
    {
      name: "isInSold",
      type: "boolean",
      title: "En solde ?"
    },
    {
      name: "altPrice",
      type: "number",
      title: "Prix soldé"
    },
    {
      name: "weight",
      type: "number",
      title: "Poid (en gramme)"
    }
  ]
};
