  export const getCompanyOfficesProductsAndServices = /* GraphQL */ `
  query getCompanyProductsAndServices($id: ID!) {
    getCompany(id: $id) {
      id
      name
      offices(filter: {deleted: {ne: true}}) {
        items {
          id
          name
          administrator
          categoryId
          image
          employees {
            items {
              id
              name
              username
              officeId
              services {
                items {
                  id
                  service {
                    cost
                    name
                    id
                  }
                }
              }
            }
          }
          location
          deleted
          deletedAt
          createdAt
          owner
        }
      }
      services {
        items {
          id
          service {
            name
            cost
            id
          }
          cost
        }
      }
      products {
        items {
          id
          product {
            name
            cost
            id
          }
          cost
        }
      }
    }
  }
`;

export const getCompanyProductsAndServices = /* GraphQL */ `
query getCompanyProductsAndServices($id: ID!) {
  getCompany(id: $id) {
    id
    name
    services {
      items {
        id
        service {
          name
          cost
          id
        }
        cost
      }
    }
    products {
      items {
        id
        product {
          name
          cost
          id
        }
        cost
      }
    }
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
        offices(filter: {deleted: {ne: true}}) {
          items {
            administrator
            id
            location
            owner
          }
        }
      }
    }
  }
`;

export const listEmployees = `
  query Employees($id: String!) {
    listEmployees(filter: {officeId: {eq: $id}}) {
      items {
        id
        name
        username
        services {
          items {
            id
            service {
              cost
              name
              id
            }
          }
        }
      }
    }
  }
`;

export const listEmployeesFromOffice = `
query Office($id: String!) {
  getOffice(id: $id) {
    employees {
      items {
        name
        id
        username
        services {
          items {
            id
            service {
              cost
              name
              id
            }
          }
        }
      }
    }
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
          items {
            service {
              name
            }
          }
        }
        product {
          nextToken
        }
        customer {
          items {
            customer {
              name
              phoneid
              id
            }
          }
        }
        resposibleName
        customerName
        state
        notified
        paymentType
        deleted
        deletedAt
        date
        createdAt
      }
      nextToken
    }
  }
`;

export const listRequestsPerDay = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        service {
          items {
            service {
              name
              cost
            }
            cost
          }
        }
        product {
          items {
            product {
              name
              cost
            }
            cost
          }
        }
        paymentType
        customerName
        createdAt
        date
      }
      nextToken
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
          items {
            id
            name
            username
            officeId
            services {
              items {
                id
                service {
                  name
                  id
                }
              }
            }
          }
        }
        location
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
        nextToken
      }
      service {
        items {
          service {
            name
          }
        }
      }
      product {
        nextToken
      }
      customer {
        items {
          customer {
            name
            phoneid
            id
          }
        }
      }
      resposibleName
      customerName
      notified
      state
      paymentType
      deleted
      deletedAt
      date
      createdAt
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
          category {
            id
          }
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
          subcategory {
            id
          }
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
          items {
            id
            name
          }
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
          category {
            id
          }
        }
        nextToken
      }
      subcategory {
        items {
          id
          createdAt
          subcategory {
            id
          }
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