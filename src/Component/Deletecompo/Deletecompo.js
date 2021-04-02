import React, { useEffect, useState } from 'react';
import Itemdelte from '../Itemdelte/Itemdelte';

const Deletecompo = () => {
    const[deleed,setDeleted]=useState([])
    useEffect(()=>{
        fetch("https://enigmatic-anchorage-12133.herokuapp.com/ollorderView")
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