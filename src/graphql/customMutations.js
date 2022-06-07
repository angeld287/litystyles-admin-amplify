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


/*********************************
*
*   SERVICES CUSTOM MUTATIONS
*
**********************************/


export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;

export const createServiceCategory = /* GraphQL */ `
  mutation CreateServiceCategory(
    $input: CreateServiceCategoryInput!
    $condition: ModelServiceCategoryConditionInput
  ) {
    createServiceCategory(input: $input, condition: $condition) {
      id
      category {
        id
        name
      }
    }
  }
`;

export const createServiceSubCategory = /* GraphQL */ `
  mutation CreateServiceSubCategory(
    $input: CreateServiceSubCategoryInput!
    $condition: ModelServiceSubCategoryConditionInput
  ) {
    createServiceSubCategory(input: $input, condition: $condition) {
      id
      subcategory {
        id
        name
      }
    }
  }
`;

export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;

export const updateServiceCategory = /* GraphQL */ `
  mutation UpdateServiceCategory(
    $input: UpdateServiceCategoryInput!
    $condition: ModelServiceCategoryConditionInput
  ) {
    updateServiceCategory(input: $input, condition: $condition) {
      id
      category {
        id
        name
      }
    }
  }
`;

export const updateServiceSubCategory = /* GraphQL */ `
  mutation UpdateServiceSubCategory(
    $input: UpdateServiceSubCategoryInput!
    $condition: ModelServiceSubCategoryConditionInput
  ) {
    updateServiceSubCategory(input: $input, condition: $condition) {
      id
      subcategory {
        id
        name
      }
    }
  }
`;

/*********************************
*
*   CATEGORIES CUSTOM MUTATIONS
*
**********************************/

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      subcategories {
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
      }
      typeName
      code
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;

export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      subcategories {
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
      }
      typeName
      code
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;



/*********************************
*
*   SUBCATEGORIES CUSTOM MUTATIONS
*
**********************************/

export const createSubCategory = /* GraphQL */ `
  mutation CreateSubCategory(
    $input: CreateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    createSubCategory(input: $input, condition: $condition) {
      id
      name
      code
      categoryName
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;

export const updateSubCategory = /* GraphQL */ `
  mutation UpdateSubCategory(
    $input: UpdateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    updateSubCategory(input: $input, condition: $condition) {
      id
      name
      code
      categoryName
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;

/*********************************
*
*   TYPES CUSTOM MUTATIONS
*
**********************************/

export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      code
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      code
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;

