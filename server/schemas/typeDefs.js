const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    itinerary:[Itinerary]
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

  type Itinerary {
    _id: ID
    parks: [Park]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    itinerary: [Itinerary]
    user(id: ID): User
    me: User
    parks: [Park]
    park(parkId: ID): Park
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth

    addItinerary(id: ID!, tripDates: Int, dateCreated: Int): Itinerary
    removeItinerary(id: ID!, tripDates: Int, dateCreated: Int): Itinerary
    updateItinerary(id: ID!, tripDates: Int, dateCreated: Int): Itinerary
  }
`;

module.exports = typeDefs;
