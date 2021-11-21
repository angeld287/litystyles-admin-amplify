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
            id
            category {
              id
              name
            }
          }
        }
        subcategory {
          items {
            id
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