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
        deleted
        id
        packagingformat
        createdAt
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

/*********************************
*
*   SERVICES CUSTOM QUERIES
*
**********************************/

export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cost
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
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


/*********************************
*
*   CATEGORIES CUSTOM QUERIES
*
**********************************/

export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $filterSub: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subcategories(filter: $filterSub) {
          items {
            name
            code
            deleted
            categoryName
            id
          }
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      nextToken
    }
  }
`;

/*********************************
*
*   SUBCATEGORIES CUSTOM QUERIES
*
**********************************/

export const listSubCategorys = /* GraphQL */ `
  query ListSubCategorys(
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        categoryName
        deleted
        deletedAt
        createdAt
        owner
      }
      nextToken
    }
  }
`;


/*********************************
*
*   TYPES CUSTOM QUERIES
*
**********************************/

export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      nextToken
    }
  }
`;