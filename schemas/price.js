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
  options: {
    collapsible: true
  },
  fields: [
    {
      name: "salePrice",
      type: "number",
      title: "Prix de vente"
    },
    {
      name: "dealerPrice",
      type: "number",
      title: "Prix revendeur"
    },
    {
      name: "discountPrice",
      type: "number",
      title: "Prix promo"
    },
    {
      name: "weight",
      type: "number",
      title: "Poids (en gramme)"
    }
  ]
};
