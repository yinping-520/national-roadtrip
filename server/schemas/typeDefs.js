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
    state: String
    name: String
    address: String
    description: String
    weatherInfo: String
    activities1: [String],
    activities2: [String]
    website: String
    lat: Float
    long: Float
    mainActivity: String
    images: [String]
    id: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID): User
    parks: [Park]
    park(parkId: String): Park
    savedPark(_id: ID): Park
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addItinerary(id: ID!): User
    deleteItinerary(id: ID!): User
  }
`;

module.exports = typeDefs;
