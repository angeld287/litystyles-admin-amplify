/*********************************
*
*   PRODUCTS CUSTOM MUTATIONS
*
**********************************/

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      cost
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
      categoryId
      subCategoryId
      image
      deleted
      packagingformat
      createdAt
    }
  }
`;

export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
      createProductCategory(input: $input, condition: $condition) {
        id
        category {
          id
          name
      }
    }
  }
`;


export const createProductSubCategory = /* GraphQL */ `
  mutation CreateProductSubCategory(
    $input: CreateProductSubCategoryInput!
    $condition: ModelProductSubCategoryConditionInput
  ) {
      createProductSubCategory(input: $input, condition: $condition) {
        id
        subcategory {
          id
          name
      }
    }
  }
`;

export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      cost
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
      categoryId
      subCategoryId
      image
      deleted
      packagingformat
      createdAt
    }
  }
`;

export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
      id
        category {
          id
          name
      }
    }
  }
`;

export const updateProductSubCategory = /* GraphQL */ `
  mutation UpdateProductSubCategory(
    $input: UpdateProductSubCategoryInput!
    $condition: ModelProductSubCategoryConditionInput
  ) {
    updateProductSubCategory(input: $input, condition: $condition) {
      id
      subcategory {
        id
        name
      }
    }
  }
`;