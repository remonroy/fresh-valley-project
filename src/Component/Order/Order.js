import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Showorder from '../Showorder/Showorder';
import { useParams } from "react-router-dom";

import './Order.css';
const Order = () => {
    const { id } = useParams();
    const [loogeduser,setLoogeduser]=useContext(userContext)
    const[orderinfo,setOrderinfo]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4500/showOrder/?email=`+loogeduser.email)
        .then(res=>res.json())
        .then(data=>setOrderinfo(data))
    },[])
    return (
        <div>
            <div className="leftsite">
                <img src={loogeduser.photo} alt=""/>
                <h4>{loogeduser.name}</h4>
                <h5>total order {orderinfo.length}</h5>
           </div>
          {
            orderinfo.map(show=><Showorder show={show}></Showorder>)
          }
        </div>
    );
};

export default Order;