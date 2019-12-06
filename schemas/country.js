import { FiMap } from "react-icons/fi";

export default {
  name: "country",
  title: "Pays",
  type: "document",
  icon: FiMap,
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
