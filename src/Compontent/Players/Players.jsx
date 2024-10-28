import axios from "axios";
import { useEffect, useState } from "react";


const Players = () => {
    const [data,setData] =useState([])
    useEffect(() =>{
        axios.get('Fake.json')
        .then(data => setData(data.data))
    },[])
    return (
        <div className="w-10/12 mx-auto">
            <h1>Data: {data.length}</h1>
        </div>
    );
};

export default Players;