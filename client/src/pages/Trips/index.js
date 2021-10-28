import React from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ITINERARY } from '../../utils/mutations';
import auth from '../../utils/auth';


function Trips() {
    console.log(auth.getProfile());
    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            id: auth.getProfile().data._id
        }
    });
    if (loading) {
        return (<div>loading</div>)
    }
    console.log(data);
    const itineraries = data.user.itinerary;
    return (<div>{itineraries.map((itinerary) => {


          
        return (

        <div>{itinerary.name}</div>

        )  
})}</div>)
};

// export default Trips;