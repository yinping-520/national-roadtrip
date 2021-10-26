const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    itinerary:[ID]
  }

  type Park {
    _id: ID
    name: String
    address: String
    description: String
    weatherInfo: String
    activities: [String]
    website: String
    lat: Float
    long: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID): User
    parks: [Park]
    park(id: ID): Park
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addItinerary(ids: [ID]!): User
    deleteItinerary(id: ID!): User
  }
`;

module.exports = typeDefs;
