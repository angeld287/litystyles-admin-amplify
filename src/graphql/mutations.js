/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      assistant
      offices {
        items {
          id
          name
          administrator
          categoryId
          image
          location
          deleted
          deletedAt
          createdAt
          companyId
          owner
        }
        nextToken
      }
      services {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      products {
        items {
          id
          quantity
          cost
          createdAt
        }
        nextToken
      }
      deleted
      owner
      deletedAt
      createdAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      assistant
      offices {
        items {
          id
          name
          administrator
          categoryId
          image
          location
          deleted
          deletedAt
          createdAt
          companyId
          owner
        }
        nextToken
      }
      services {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      products {
        items {
          id
          quantity
          cost
          createdAt
        }
        nextToken
      }
      deleted
      owner
      deletedAt
      createdAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      assistant
      offices {
        items {
          id
          name
          administrator
          categoryId
          image
          location
          deleted
          deletedAt
          createdAt
          companyId
          owner
        }
        nextToken
      }
      services {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      products {
        items {
          id
          quantity
          cost
          createdAt
        }
        nextToken
      }
      deleted
      owner
      deletedAt
      createdAt
    }
  }
`;
export const createCompanyService = /* GraphQL */ `
  mutation CreateCompanyService(
    $input: CreateCompanyServiceInput!
    $condition: ModelCompanyServiceConditionInput
  ) {
    createCompanyService(input: $input, condition: $condition) {
      id
      comapny {
        id
        name
        assistant
        offices {
          nextToken
        }
        services {
          nextToken
        }
        products {
          nextToken
        }
        deleted
        owner
        deletedAt
        createdAt
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      cost
      createdAt
    }
  }
`;
export const updateCompanyService = /* GraphQL */ `
  mutation UpdateCompanyService(
    $input: UpdateCompanyServiceInput!
    $condition: ModelCompanyServiceConditionInput
  ) {
    updateCompanyService(input: $input, condition: $condition) {
      id
      comapny {
        id
        name
        assistant
        offices {
          nextToken
        }
        services {
          nextToken
        }
        products {
          nextToken
        }
        deleted
        owner
        deletedAt
        createdAt
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      cost
      createdAt
    }
  }
`;
export const deleteCompanyService = /* GraphQL */ `
  mutation DeleteCompanyService(
    $input: DeleteCompanyServiceInput!
    $condition: ModelCompanyServiceConditionInput
  ) {
    deleteCompanyService(input: $input, condition: $condition) {
      id
      comapny {
        id
        name
        assistant
        offices {
          nextToken
        }
        services {
          nextToken
        }
        products {
          nextToken
        }
        deleted
        owner
        deletedAt
        createdAt
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      cost
      createdAt
    }
  }
`;
export const createCompanyProduct = /* GraphQL */ `
  mutation CreateCompanyProduct(
    $input: CreateCompanyProductInput!
    $condition: ModelCompanyProductConditionInput
  ) {
    createCompanyProduct(input: $input, condition: $condition) {
      id
      comapny {
        id
        name
        assistant
        offices {
          nextToken
        }
        services {
          nextToken
        }
        products {
          nextToken
        }
        deleted
        owner
        deletedAt
        createdAt
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      quantity
      cost
      createdAt
    }
  }
`;
export const updateCompanyProduct = /* GraphQL */ `
  mutation UpdateCompanyProduct(
    $input: UpdateCompanyProductInput!
    $condition: ModelCompanyProductConditionInput
  ) {
    updateCompanyProduct(input: $input, condition: $condition) {
      id
      comapny {
        id
        name
        assistant
        offices {
          nextToken
        }
        services {
          nextToken
        }
        products {
          nextToken
        }
        deleted
        owner
        deletedAt
        createdAt
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      quantity
      cost
      createdAt
    }
  }
`;
export const deleteCompanyProduct = /* GraphQL */ `
  mutation DeleteCompanyProduct(
    $input: DeleteCompanyProductInput!
    $condition: ModelCompanyProductConditionInput
  ) {
    deleteCompanyProduct(input: $input, condition: $condition) {
      id
      comapny {
        id
        name
        assistant
        offices {
          nextToken
        }
        services {
          nextToken
        }
        products {
          nextToken
        }
        deleted
        owner
        deletedAt
        createdAt
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      quantity
      cost
      createdAt
    }
  }
`;
export const createOffice = /* GraphQL */ `
  mutation CreateOffice(
    $input: CreateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    createOffice(input: $input, condition: $condition) {
      id
      name
      administrator
      employees {
        items {
          id
          name
          username
          officeId
          phoneid
          phone_number
          image
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      categoryId
      image
      location
      deleted
      deletedAt
      createdAt
      companyId
      owner
    }
  }
`;
export const updateOffice = /* GraphQL */ `
  mutation UpdateOffice(
    $input: UpdateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    updateOffice(input: $input, condition: $condition) {
      id
      name
      administrator
      employees {
        items {
          id
          name
          username
          officeId
          phoneid
          phone_number
          image
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      categoryId
      image
      location
      deleted
      deletedAt
      createdAt
      companyId
      owner
    }
  }
`;
export const deleteOffice = /* GraphQL */ `
  mutation DeleteOffice(
    $input: DeleteOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    deleteOffice(input: $input, condition: $condition) {
      id
      name
      administrator
      employees {
        items {
          id
          name
          username
          officeId
          phoneid
          phone_number
          image
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      categoryId
      image
      location
      deleted
      deletedAt
      createdAt
      companyId
      owner
    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      code
      categories {
        items {
          id
          name
          typeName
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
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
      categories {
        items {
          id
          name
          typeName
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
      code
      categories {
        items {
          id
          name
          typeName
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      offices {
        items {
          id
          name
          administrator
          categoryId
          image
          location
          deleted
          deletedAt
          createdAt
          companyId
          owner
        }
        nextToken
      }
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
        nextToken
      }
      products {
        items {
          id
          createdAt
        }
        nextToken
      }
      services {
        items {
          id
          createdAt
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
      offices {
        items {
          id
          name
          administrator
          categoryId
          image
          location
          deleted
          deletedAt
          createdAt
          companyId
          owner
        }
        nextToken
      }
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
        nextToken
      }
      products {
        items {
          id
          createdAt
        }
        nextToken
      }
      services {
        items {
          id
          createdAt
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
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      offices {
        items {
          id
          name
          administrator
          categoryId
          image
          location
          deleted
          deletedAt
          createdAt
          companyId
          owner
        }
        nextToken
      }
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
        nextToken
      }
      products {
        items {
          id
          createdAt
        }
        nextToken
      }
      services {
        items {
          id
          createdAt
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
  }
`;
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
      products {
        items {
          id
          createdAt
        }
        nextToken
      }
      services {
        items {
          id
          createdAt
        }
        nextToken
      }
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
      products {
        items {
          id
          createdAt
        }
        nextToken
      }
      services {
        items {
          id
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteSubCategory = /* GraphQL */ `
  mutation DeleteSubCategory(
    $input: DeleteSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    deleteSubCategory(input: $input, condition: $condition) {
      id
      name
      code
      categoryName
      products {
        items {
          id
          createdAt
        }
        nextToken
      }
      services {
        items {
          id
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
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
        offices {
          nextToken
        }
        subcategories {
          nextToken
        }
        products {
          nextToken
        }
        services {
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
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
        offices {
          nextToken
        }
        subcategories {
          nextToken
        }
        products {
          nextToken
        }
        services {
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
      id
      category {
        id
        name
        offices {
          nextToken
        }
        subcategories {
          nextToken
        }
        products {
          nextToken
        }
        services {
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      createdAt
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
        code
        categoryName
        products {
          nextToken
        }
        services {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      createdAt
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
        code
        categoryName
        products {
          nextToken
        }
        services {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deleteProductSubCategory = /* GraphQL */ `
  mutation DeleteProductSubCategory(
    $input: DeleteProductSubCategoryInput!
    $condition: ModelProductSubCategoryConditionInput
  ) {
    deleteProductSubCategory(input: $input, condition: $condition) {
      id
      subcategory {
        id
        name
        code
        categoryName
        products {
          nextToken
        }
        services {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      createdAt
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
        offices {
          nextToken
        }
        subcategories {
          nextToken
        }
        products {
          nextToken
        }
        services {
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
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
        offices {
          nextToken
        }
        subcategories {
          nextToken
        }
        products {
          nextToken
        }
        services {
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deleteServiceCategory = /* GraphQL */ `
  mutation DeleteServiceCategory(
    $input: DeleteServiceCategoryInput!
    $condition: ModelServiceCategoryConditionInput
  ) {
    deleteServiceCategory(input: $input, condition: $condition) {
      id
      category {
        id
        name
        offices {
          nextToken
        }
        subcategories {
          nextToken
        }
        products {
          nextToken
        }
        services {
          nextToken
        }
        typeName
        code
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
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
        code
        categoryName
        products {
          nextToken
        }
        services {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
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
        code
        categoryName
        products {
          nextToken
        }
        services {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deleteServiceSubCategory = /* GraphQL */ `
  mutation DeleteServiceSubCategory(
    $input: DeleteServiceSubCategoryInput!
    $condition: ModelServiceSubCategoryConditionInput
  ) {
    deleteServiceSubCategory(input: $input, condition: $condition) {
      id
      subcategory {
        id
        name
        code
        categoryName
        products {
          nextToken
        }
        services {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      cost
      companies {
        items {
          id
          quantity
          cost
          createdAt
        }
        nextToken
      }
      request {
        items {
          id
          cost
          quantity
          createdAt
        }
        nextToken
      }
      category {
        items {
          id
          createdAt
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
        }
        nextToken
      }
      categoryId
      subCategoryId
      deleted
      image
      packagingformat
      deletedAt
      createdAt
      owner
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
      companies {
        items {
          id
          quantity
          cost
          createdAt
        }
        nextToken
      }
      request {
        items {
          id
          cost
          quantity
          createdAt
        }
        nextToken
      }
      category {
        items {
          id
          createdAt
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
        }
        nextToken
      }
      categoryId
      subCategoryId
      deleted
      image
      packagingformat
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      cost
      companies {
        items {
          id
          quantity
          cost
          createdAt
        }
        nextToken
      }
      request {
        items {
          id
          cost
          quantity
          createdAt
        }
        nextToken
      }
      category {
        items {
          id
          createdAt
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
        }
        nextToken
      }
      categoryId
      subCategoryId
      deleted
      image
      packagingformat
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      id
      name
      cost
      employees {
        items {
          id
          createdAt
          duration
        }
        nextToken
      }
      companies {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      request {
        items {
          id
          resposibleName
          cost
          createdAt
        }
        nextToken
      }
      category {
        items {
          id
          createdAt
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
        }
        nextToken
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      id
      name
      cost
      employees {
        items {
          id
          createdAt
          duration
        }
        nextToken
      }
      companies {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      request {
        items {
          id
          resposibleName
          cost
          createdAt
        }
        nextToken
      }
      category {
        items {
          id
          createdAt
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
        }
        nextToken
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      id
      name
      cost
      employees {
        items {
          id
          createdAt
          duration
        }
        nextToken
      }
      companies {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      request {
        items {
          id
          resposibleName
          cost
          createdAt
        }
        nextToken
      }
      category {
        items {
          id
          createdAt
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
        }
        nextToken
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
export const createEmployeeService = /* GraphQL */ `
  mutation CreateEmployeeService(
    $input: CreateEmployeeServiceInput!
    $condition: ModelEmployeeServiceConditionInput
  ) {
    createEmployeeService(input: $input, condition: $condition) {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
        phone_number
        image
        services {
          nextToken
        }
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
      duration
    }
  }
`;
export const updateEmployeeService = /* GraphQL */ `
  mutation UpdateEmployeeService(
    $input: UpdateEmployeeServiceInput!
    $condition: ModelEmployeeServiceConditionInput
  ) {
    updateEmployeeService(input: $input, condition: $condition) {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
        phone_number
        image
        services {
          nextToken
        }
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
      duration
    }
  }
`;
export const deleteEmployeeService = /* GraphQL */ `
  mutation DeleteEmployeeService(
    $input: DeleteEmployeeServiceInput!
    $condition: ModelEmployeeServiceConditionInput
  ) {
    deleteEmployeeService(input: $input, condition: $condition) {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
        phone_number
        image
        services {
          nextToken
        }
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
      duration
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      username
      officeId
      phoneid
      phone_number
      image
      services {
        items {
          id
          createdAt
          duration
        }
        nextToken
      }
      request {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      username
      officeId
      phoneid
      phone_number
      image
      services {
        items {
          id
          createdAt
          duration
        }
        nextToken
      }
      request {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      username
      officeId
      phoneid
      phone_number
      image
      services {
        items {
          id
          createdAt
          duration
        }
        nextToken
      }
      request {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      username
      phoneid
      phone_number
      image
      request {
        items {
          id
          cost
          resposibleName
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      username
      phoneid
      phone_number
      image
      request {
        items {
          id
          cost
          resposibleName
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      username
      phoneid
      phone_number
      image
      request {
        items {
          id
          cost
          resposibleName
          createdAt
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createRequestCustomer = /* GraphQL */ `
  mutation CreateRequestCustomer(
    $input: CreateRequestCustomerInput!
    $condition: ModelRequestCustomerConditionInput
  ) {
    createRequestCustomer(input: $input, condition: $condition) {
      id
      cost
      resposibleName
      customer {
        id
        name
        username
        phoneid
        phone_number
        image
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      createdAt
    }
  }
`;
export const updateRequestCustomer = /* GraphQL */ `
  mutation UpdateRequestCustomer(
    $input: UpdateRequestCustomerInput!
    $condition: ModelRequestCustomerConditionInput
  ) {
    updateRequestCustomer(input: $input, condition: $condition) {
      id
      cost
      resposibleName
      customer {
        id
        name
        username
        phoneid
        phone_number
        image
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      createdAt
    }
  }
`;
export const deleteRequestCustomer = /* GraphQL */ `
  mutation DeleteRequestCustomer(
    $input: DeleteRequestCustomerInput!
    $condition: ModelRequestCustomerConditionInput
  ) {
    deleteRequestCustomer(input: $input, condition: $condition) {
      id
      cost
      resposibleName
      customer {
        id
        name
        username
        phoneid
        phone_number
        image
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      createdAt
    }
  }
`;
export const createRequestEmployee = /* GraphQL */ `
  mutation CreateRequestEmployee(
    $input: CreateRequestEmployeeInput!
    $condition: ModelRequestEmployeeConditionInput
  ) {
    createRequestEmployee(input: $input, condition: $condition) {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
        phone_number
        image
        services {
          nextToken
        }
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      cost
      createdAt
    }
  }
`;
export const updateRequestEmployee = /* GraphQL */ `
  mutation UpdateRequestEmployee(
    $input: UpdateRequestEmployeeInput!
    $condition: ModelRequestEmployeeConditionInput
  ) {
    updateRequestEmployee(input: $input, condition: $condition) {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
        phone_number
        image
        services {
          nextToken
        }
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      cost
      createdAt
    }
  }
`;
export const deleteRequestEmployee = /* GraphQL */ `
  mutation DeleteRequestEmployee(
    $input: DeleteRequestEmployeeInput!
    $condition: ModelRequestEmployeeConditionInput
  ) {
    deleteRequestEmployee(input: $input, condition: $condition) {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
        phone_number
        image
        services {
          nextToken
        }
        request {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      cost
      createdAt
    }
  }
`;
export const createRequestService = /* GraphQL */ `
  mutation CreateRequestService(
    $input: CreateRequestServiceInput!
    $condition: ModelRequestServiceConditionInput
  ) {
    createRequestService(input: $input, condition: $condition) {
      id
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      resposibleName
      cost
      createdAt
    }
  }
`;
export const updateRequestService = /* GraphQL */ `
  mutation UpdateRequestService(
    $input: UpdateRequestServiceInput!
    $condition: ModelRequestServiceConditionInput
  ) {
    updateRequestService(input: $input, condition: $condition) {
      id
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      resposibleName
      cost
      createdAt
    }
  }
`;
export const deleteRequestService = /* GraphQL */ `
  mutation DeleteRequestService(
    $input: DeleteRequestServiceInput!
    $condition: ModelRequestServiceConditionInput
  ) {
    deleteRequestService(input: $input, condition: $condition) {
      id
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      service {
        id
        name
        cost
        employees {
          nextToken
        }
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        deletedAt
        createdAt
        owner
      }
      resposibleName
      cost
      createdAt
    }
  }
`;
export const createRequestProduct = /* GraphQL */ `
  mutation CreateRequestProduct(
    $input: CreateRequestProductInput!
    $condition: ModelRequestProductConditionInput
  ) {
    createRequestProduct(input: $input, condition: $condition) {
      id
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      cost
      quantity
      createdAt
    }
  }
`;
export const updateRequestProduct = /* GraphQL */ `
  mutation UpdateRequestProduct(
    $input: UpdateRequestProductInput!
    $condition: ModelRequestProductConditionInput
  ) {
    updateRequestProduct(input: $input, condition: $condition) {
      id
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      cost
      quantity
      createdAt
    }
  }
`;
export const deleteRequestProduct = /* GraphQL */ `
  mutation DeleteRequestProduct(
    $input: DeleteRequestProductInput!
    $condition: ModelRequestProductConditionInput
  ) {
    deleteRequestProduct(input: $input, condition: $condition) {
      id
      request {
        id
        companyId
        resposible {
          nextToken
        }
        service {
          nextToken
        }
        product {
          nextToken
        }
        resposibleName
        customerName
        customerUsername
        customer {
          nextToken
        }
        state
        paymentType
        date
        notified
        total
        deleted
        deletedAt
        createdAt
      }
      product {
        id
        name
        cost
        companies {
          nextToken
        }
        request {
          nextToken
        }
        category {
          nextToken
        }
        subcategory {
          nextToken
        }
        categoryId
        subCategoryId
        deleted
        image
        packagingformat
        deletedAt
        createdAt
        owner
      }
      cost
      quantity
      createdAt
    }
  }
`;
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
      id
      companyId
      resposible {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      service {
        items {
          id
          resposibleName
          cost
          createdAt
        }
        nextToken
      }
      product {
        items {
          id
          cost
          quantity
          createdAt
        }
        nextToken
      }
      resposibleName
      customerName
      customerUsername
      customer {
        items {
          id
          cost
          resposibleName
          createdAt
        }
        nextToken
      }
      state
      paymentType
      date
      notified
      total
      deleted
      deletedAt
      createdAt
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
      id
      companyId
      resposible {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      service {
        items {
          id
          resposibleName
          cost
          createdAt
        }
        nextToken
      }
      product {
        items {
          id
          cost
          quantity
          createdAt
        }
        nextToken
      }
      resposibleName
      customerName
      customerUsername
      customer {
        items {
          id
          cost
          resposibleName
          createdAt
        }
        nextToken
      }
      state
      paymentType
      date
      notified
      total
      deleted
      deletedAt
      createdAt
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
      id
      companyId
      resposible {
        items {
          id
          cost
          createdAt
        }
        nextToken
      }
      service {
        items {
          id
          resposibleName
          cost
          createdAt
        }
        nextToken
      }
      product {
        items {
          id
          cost
          quantity
          createdAt
        }
        nextToken
      }
      resposibleName
      customerName
      customerUsername
      customer {
        items {
          id
          cost
          resposibleName
          createdAt
        }
        nextToken
      }
      state
      paymentType
      date
      notified
      total
      deleted
      deletedAt
      createdAt
    }
  }
`;
