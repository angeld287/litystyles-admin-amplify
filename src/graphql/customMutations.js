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
          createdAt
        }
        nextToken
      }
      product {
        items {
          id
          cost
          createdAt
        }
        nextToken
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
      services {
        items {
          id
          service {
            name
            id
          }
        }
      }
      request {
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
      services {
        items {
          id
          service {
            name
            id
          }
        }
        nextToken
      }
      request {
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


export const updateRequestE = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
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