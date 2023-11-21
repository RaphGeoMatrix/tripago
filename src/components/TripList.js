import { useState, useEffect, useCallback } from "react"
import { useFetch } from '../hooks/usefetch'
//Styles
import './TripList.css'

export default function TripList() {
    //const[trips, setTrips] = useState([])
    const[url, setUrl]  = useState('http://localhost:3000/trips')
    const { data: trips } = useFetch(url)

    return (
        <div>
            <h2>Trip List</h2>
            <ul>
                {trips && trips.map(trip=> (
                    <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p></li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={()=> setUrl('http://localhost:3000/trips?loc=Europe')}>
                    European Trips
                </button>
                <button onClick={()=> setUrl('http://localhost:3000/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}