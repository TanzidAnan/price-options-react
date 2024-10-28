import axios from "axios";
import { useEffect, useState } from "react";
import Player from "../player/Player";


const Players = () => {
    const [datas,setDatas] =useState([])
    useEffect(() =>{
        axios.get('Fake.json')
        .then(data => setDatas(data.data))
    },[])
    return (
        <div className="w-10/12 mx-auto">
            <h1>Data: {datas.length}</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    datas.map((data,idx) =><Player key={idx} data={data}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;