/*********************************
*
*   PRODUCTS CUSTOM QUERIES
*
**********************************/

export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        cost
        categoryId
        subCategoryId
        name
        image
        id
        packagingformat
        category {
          items {
            category {
              id
              name
            }
          }
        }
        subcategory {
          items {
            subcategory {
              id
              name
            }
          }
        }
      }
      nextToken
    }
  }
`;