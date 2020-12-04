/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($resposibleName: String) {
    onCreateRequest(resposibleName: $resposibleName) {
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
export const onCreateRequestService = /* GraphQL */ `
  subscription OnCreateRequestService($resposibleName: String) {
    onCreateRequestService(resposibleName: $resposibleName) {
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
export const onCreateRequestCustomer = /* GraphQL */ `
  subscription OnCreateRequestCustomer($resposibleName: String) {
    onCreateRequestCustomer(resposibleName: $resposibleName) {
      id
      cost
      resposibleName
      customer {
        id
        name
        username
        phoneid
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($resposibleName: String) {
    onUpdateRequest(resposibleName: $resposibleName) {
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
export const onUpdateRequestE = /* GraphQL */ `
  subscription OnUpdateRequestE($resposibleName: String, $state: State) {
    onUpdateRequestE(resposibleName: $resposibleName, state: $state) {
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
export const onUpdateRequestC = /* GraphQL */ `
  subscription OnUpdateRequestC($customerUsername: String, $state: State) {
    onUpdateRequestC(customerUsername: $customerUsername, state: $state) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String) {
    onDeleteCompany(owner: $owner) {
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
export const onCreateCompanyService = /* GraphQL */ `
  subscription OnCreateCompanyService {
    onCreateCompanyService {
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
export const onUpdateCompanyService = /* GraphQL */ `
  subscription OnUpdateCompanyService {
    onUpdateCompanyService {
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
export const onDeleteCompanyService = /* GraphQL */ `
  subscription OnDeleteCompanyService {
    onDeleteCompanyService {
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
export const onCreateCompanyProduct = /* GraphQL */ `
  subscription OnCreateCompanyProduct {
    onCreateCompanyProduct {
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
export const onUpdateCompanyProduct = /* GraphQL */ `
  subscription OnUpdateCompanyProduct {
    onUpdateCompanyProduct {
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
export const onDeleteCompanyProduct = /* GraphQL */ `
  subscription OnDeleteCompanyProduct {
    onDeleteCompanyProduct {
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
export const onCreateOffice = /* GraphQL */ `
  subscription OnCreateOffice($owner: String) {
    onCreateOffice(owner: $owner) {
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
export const onUpdateOffice = /* GraphQL */ `
  subscription OnUpdateOffice($owner: String) {
    onUpdateOffice(owner: $owner) {
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
export const onDeleteOffice = /* GraphQL */ `
  subscription OnDeleteOffice($owner: String) {
    onDeleteOffice(owner: $owner) {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType($owner: String) {
    onCreateType(owner: $owner) {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType($owner: String) {
    onUpdateType(owner: $owner) {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType($owner: String) {
    onDeleteType(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String) {
    onDeleteCategory(owner: $owner) {
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
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory($owner: String) {
    onCreateSubCategory(owner: $owner) {
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
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory($owner: String) {
    onUpdateSubCategory(owner: $owner) {
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
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory($owner: String) {
    onDeleteSubCategory(owner: $owner) {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory {
    onCreateProductCategory {
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
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory {
    onUpdateProductCategory {
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
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory {
    onDeleteProductCategory {
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
export const onCreateProductSubCategory = /* GraphQL */ `
  subscription OnCreateProductSubCategory {
    onCreateProductSubCategory {
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
export const onUpdateProductSubCategory = /* GraphQL */ `
  subscription OnUpdateProductSubCategory {
    onUpdateProductSubCategory {
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
export const onDeleteProductSubCategory = /* GraphQL */ `
  subscription OnDeleteProductSubCategory {
    onDeleteProductSubCategory {
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
export const onCreateServiceCategory = /* GraphQL */ `
  subscription OnCreateServiceCategory {
    onCreateServiceCategory {
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onUpdateServiceCategory = /* GraphQL */ `
  subscription OnUpdateServiceCategory {
    onUpdateServiceCategory {
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onDeleteServiceCategory = /* GraphQL */ `
  subscription OnDeleteServiceCategory {
    onDeleteServiceCategory {
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onCreateServiceSubCategory = /* GraphQL */ `
  subscription OnCreateServiceSubCategory {
    onCreateServiceSubCategory {
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onUpdateServiceSubCategory = /* GraphQL */ `
  subscription OnUpdateServiceSubCategory {
    onUpdateServiceSubCategory {
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onDeleteServiceSubCategory = /* GraphQL */ `
  subscription OnDeleteServiceSubCategory {
    onDeleteServiceSubCategory {
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
      deleted
      image
      packagingformat
      deletedAt
      createdAt
      owner
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
      deleted
      image
      packagingformat
      deletedAt
      createdAt
      owner
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
      deleted
      image
      packagingformat
      deletedAt
      createdAt
      owner
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($owner: String) {
    onCreateService(owner: $owner) {
      id
      name
      cost
      employees {
        items {
          id
          createdAt
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
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($owner: String) {
    onUpdateService(owner: $owner) {
      id
      name
      cost
      employees {
        items {
          id
          createdAt
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
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($owner: String) {
    onDeleteService(owner: $owner) {
      id
      name
      cost
      employees {
        items {
          id
          createdAt
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
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const onCreateEmployeeService = /* GraphQL */ `
  subscription OnCreateEmployeeService {
    onCreateEmployeeService {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onUpdateEmployeeService = /* GraphQL */ `
  subscription OnUpdateEmployeeService {
    onUpdateEmployeeService {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onDeleteEmployeeService = /* GraphQL */ `
  subscription OnDeleteEmployeeService {
    onDeleteEmployeeService {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($owner: String) {
    onCreateEmployee(owner: $owner) {
      id
      name
      username
      officeId
      phoneid
      services {
        items {
          id
          createdAt
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($owner: String, $username: String) {
    onUpdateEmployee(owner: $owner, username: $username) {
      id
      name
      username
      officeId
      phoneid
      services {
        items {
          id
          createdAt
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($owner: String) {
    onDeleteEmployee(owner: $owner) {
      id
      name
      username
      officeId
      phoneid
      services {
        items {
          id
          createdAt
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
      id
      name
      username
      phoneid
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String, $username: String) {
    onUpdateCustomer(owner: $owner, username: $username) {
      id
      name
      username
      phoneid
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
      id
      name
      username
      phoneid
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
export const onCreateRequestEmployee = /* GraphQL */ `
  subscription OnCreateRequestEmployee {
    onCreateRequestEmployee {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
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
export const onUpdateRequestEmployee = /* GraphQL */ `
  subscription OnUpdateRequestEmployee {
    onUpdateRequestEmployee {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
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
export const onDeleteRequestEmployee = /* GraphQL */ `
  subscription OnDeleteRequestEmployee {
    onDeleteRequestEmployee {
      id
      employee {
        id
        name
        username
        officeId
        phoneid
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
export const onCreateRequestProduct = /* GraphQL */ `
  subscription OnCreateRequestProduct {
    onCreateRequestProduct {
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
export const onUpdateRequestProduct = /* GraphQL */ `
  subscription OnUpdateRequestProduct {
    onUpdateRequestProduct {
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
export const onDeleteRequestProduct = /* GraphQL */ `
  subscription OnDeleteRequestProduct {
    onDeleteRequestProduct {
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
