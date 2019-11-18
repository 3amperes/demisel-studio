// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import config from "./config";
import category from "./category";
import color from "./productColor";
import model from "./model";
import collection from "./collection";
import price from "./price";
import product from "./product";
import richText from "./richText";
import figure from "./figure";
import slide from "./slide";
import link from "./link";
import push from "./push";
import pushes from "./pushes";
import article from "./article";
import collectionItem from "./collectionItem";
import outlet from "./outlet";
import country from "./country";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    config,
    category,
    color,
    model,
    product,
    collection,
    price,
    richText,
    figure,
    slide,
    link,
    push,
    pushes,
    article,
    collectionItem,
    outlet,
    country
  ])
});
