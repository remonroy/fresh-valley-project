import React from 'react';
import './Item.css'
import { useHistory } from "react-router-dom";
const Item = ({dt}) => {
   const {iamgeUrl,name,price,_id}=dt
   const history = useHistory();
   const handleClick=(id)=>{
        history.push(`/single/${id}`);
   }
    return (
        <div className="heding">
            <img src={iamgeUrl} alt=""/>
            <h1>{name}</h1>
            <div className="siting">
                <p>$ {price}</p>
                <button onClick={()=>handleClick(_id)}>Buy naow</button>
            </div>
        </div>
    );
};

export default Item;