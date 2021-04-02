import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Single from '../Single/Single';

const Home = () => {
    const [datainfo,setDatainfo]=useState([])
    useEffect(()=>{
         fetch("https://enigmatic-anchorage-12133.herokuapp.com/products")
         .then(res=>res.json())
         .then(data=>setDatainfo(data))
    },[])
    return (
        <div>
            <Single></Single>
            {
                datainfo.map(dt=><Item key={dt._id} dt={dt}></Item>)
            }
        </div>
    );
};

export default Home;