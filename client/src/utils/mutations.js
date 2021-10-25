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

export const UPDATE_ITINERARY = gql`
  mutation updateItinerary($park: [ID]!) {
    updateItinerary(parks: $park) {
      parks {
        _id
        name
        address
        description
        weatherInfo
        activities
        website
        lat
        long
      }
    }
  }
`;


export const DELETE_ITINERARY = gql`
  mutation deleteItinerary($park: [ID]!) {
    deleteItinerary(parks: $park) {
      park {
        _id
      }
    }
  }
`;


