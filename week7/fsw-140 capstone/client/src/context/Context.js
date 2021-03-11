import React, { useState } from "react";
import axios from "axios";

// Context
export const BobContext = React.createContext();

export default function Provider(props) {
    const [data, setData] = useState([]);

    // Get Season One
    const getSeasonOne = () => {
        axios.get('/season1')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    // Get Season Two
    const getSeasonTwo = () => {
        axios.get('/season2')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    return (
        <BobContext.Provider value={{ getSeasonTwo, getSeasonOne, data }}>
            {props.children}
        </BobContext.Provider>
    );
}