const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    itinerary:[Park]
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
    images: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID): User
    parks: [Park]
    park(parkId: ID!): Park
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addItinerary(id: ID!): User
    removeItinerary(id: ID!): User
  }
`;

module.exports = typeDefs;
