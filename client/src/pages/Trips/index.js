import React from 'react';
import { QUERY_USER, QUERY_PARK_BY_UUID } from '../../utils/queries';
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ITINERARY } from '../../utils/mutations';


function Trips() {
    // const { data } = useQuery(QUERY_USER,
    //     {variables: { id: id }});
    // const itineraries = data.user.itinerary;
   
    const { data } = useQuery(QUERY_PARK_BY_UUID,
        {variables: { _id: "61797637fddf67387cc29826" }});
        const name = data.park.name
        console.log(name)

        
        return (<div>{name}</div>

        )  

};

export default Trips;