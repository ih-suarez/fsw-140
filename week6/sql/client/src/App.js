import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { map } from 'lodash';

import './app.css';

export default function App() {
    const [data, setData] = useState();


    useEffect(() => {
        axios.get('/getVehicles')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <h1>Inventory On Our Lot</h1>

            { data ? 
                map(data, vehicle => 
                    <div className='card'>
                        <h3>Make: {vehicle.make}</h3>
                        <h3>Model: {vehicle.model}</h3>
                        <h3>Year: {vehicle.year}</h3>
                    </div>    
                )
            : 
                <>
                    <h1>Gathering The Inventory</h1>
                </>
            }
        </div>
    )
}