import React from 'react';
import { QUERY_USER, QUERY_PARK_BY_UUID } from '../../utils/queries';
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ITINERARY } from '../../utils/mutations';


function Trips() {
    const { loading, data } = useQuery(QUERY_USER);
    const itineraries = data.user.itinerary;
    itineraries.map((itinerary) => {

        const { loading, data } = useQuery(QUERY_PARK_BY_UUID);

        
        
        return (<div>Hello</div>
  
        )  
})
};

// export default Trips;