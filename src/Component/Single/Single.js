import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Singleitem from '../Singleitem/Singleitem';
const Single = () => {
    const { id } = useParams();
    const[item,setItem]=useState([])
    useEffect(()=>{
    fetch(`http://localhost:4500/singleProducts/${id}`)
    .then(res=>res.json())
    .then(data=>setItem(data))
    },[])
    return (
        <div>
           
            {
                item.map(it=><Singleitem key={it._id} it={it}></Singleitem>)
            }
        </div>
    );
};

export default Single;