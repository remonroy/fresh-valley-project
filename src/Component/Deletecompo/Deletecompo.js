import React, { useEffect, useState } from 'react';
import Itemdelte from '../Itemdelte/Itemdelte';

const Deletecompo = () => {
    const[deleed,setDeleted]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/ollorderView")
        .then(res=>res.json())
        .then(data=>setDeleted(data))
    },[])
    return (
        <div>
           
            {
                deleed.map(dlt=><Itemdelte dlt={dlt}></Itemdelte>)
            }
        </div>
    );
};

export default Deletecompo;