import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => !["config"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Contenu")
    .items([
      S.listItem()
        .title("Configuration")
        .child(
          S.editor()
            .id("config")
            .schemaType("config")
            .documentId("global-config")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      S.listItem()
        .title("Bijoux par catégorie / modèle")
        .child(
          S.documentList()
            .title("Catégories")
            .menuItems(S.documentTypeList("category").getMenuItems())
            .filter("_type == $type")
            .params({ type: "category" })
            .child(categoryId =>
              S.documentList()
                .title("Modèles")
                .menuItems(S.documentTypeList("model").getMenuItems())
                .filter("_type == $type && $categoryId == category._ref")
                .params({ type: "model", categoryId })
                .child(modelId =>
                  S.documentList()
                    .title("Bijoux")
                    .menuItems(S.documentTypeList("product").getMenuItems())
                    .filter("_type == $type && $modelId == model._ref")
                    .params({ type: "product", modelId })
                )
            )
        )
    ]);
