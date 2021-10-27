import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITINERARY = gql`
  mutation addItinerary($id: ID!) {
  addItinerary(id: $id) {
    itinerary 
  }
}
`;


export const DELETE_ITINERARY = gql`
  mutation deleteItinerary($id: ID!) {
    deleteItinerary(id: $id) {
      park {
        _id
      }
    }
  }
`;


