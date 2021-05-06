/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOffice = /* GraphQL */ `
  query GetOffice($id: ID!) {
    getOffice(id: $id) {
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
export const listOffices = /* GraphQL */ `
  query ListOffices(
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        administrator
        employees {
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
      nextToken
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
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
        categories {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubCategory = /* GraphQL */ `
  query GetSubCategory($id: ID!) {
    getSubCategory(id: $id) {
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
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
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
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
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
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
