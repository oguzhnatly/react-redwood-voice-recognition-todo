export const schema = gql`
  type User {
    Id: String!
    FirstName: String!
    LastName: String!
    Email: String!
    Password: String!
  }

  input AddUser {
    FirstName: String!
    LastName: String
    Email: String!
    Password: String!
  }

  type Mutation {
    addUser(input: AddUser!): User!
  }
`
