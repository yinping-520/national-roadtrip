import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      itinerary{
        name
       }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }`
  ;

export const QUERY_PARKS = gql`
  query getParks {
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
  }`;


export const QUERY_PARK_BY_ID = gql`
  query getParkById($parkId: ID) {
    park(parkId: $parkId) {

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
  }`;

