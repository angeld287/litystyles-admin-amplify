export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($resposibleName: String) {
    onCreateRequest(resposibleName: $resposibleName) {
      id
      companyId
      resposible {
        items {
          id
          createdAt
        }
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
        items {
          id
          createdAt
        }
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
      resposibleName
      request {
        id
      }
      service {
        id
        name
        cost
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;

export const onCreateRequestCustomer = /* GraphQL */ `
  subscription OnCreateRequestCustomer($resposibleName: String) {
    onCreateRequestCustomer(resposibleName: $resposibleName) {
      id
      request {
        id
        companyId
        resposible {
          items {
            id
            createdAt
          }
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
          items {
            id
            createdAt
          }
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
        deleted
        deletedAt
        createdAt
      }
    }
  }
`;