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
      itinerary
    }
  }`
  ;

export const QUERY_PARKS = gql`
  query getParks {
    parks {
      _id
      name 
      state
      address
      description
      weatherInfo
      activities1
      activities2
      website
      lat
      long
      images
      id
      } 
  }`;


export const QUERY_PARK_BY_ID = gql`
  query getParkById($parkId: String) {
    park(parkId: $parkId){
      _id
      name 
      state
      address
      description
      weatherInfo
      activities1
      activities2
      website
      lat
      long
      images
      id
      } 
  }`;

export const QUERY_PARK_BY_UUID = gql`
  query getParkByUuid($uuid: ID) {
    park(_id: $uuid){
      _id
      name 
      state
      address
      description
      weatherInfo
      activities1
      activities2
      website
      lat
      long
      images
      id
      } 
  }`;

