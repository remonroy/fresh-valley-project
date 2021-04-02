import React, { useState } from 'react';
import './Addproduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Addproduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [iamgeUrl,setImageurl]=useState(null)
    const onSubmit = data => {
        const info={
            name:data.name,
            price:data.price,
            iamgeUrl:iamgeUrl,
            quantiti:1
        }
        console.log(info);
        const url=`https://enigmatic-anchorage-12133.herokuapp.com/addEvent`;
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        })
        .then(res=>console.log('This is respons',res))
    };

    const handleImage=(event)=>{
            
        const newData=new FormData()
        newData.set('key','b7f4891bf03cf68cbe4a60233938cbab')
        newData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', newData)
        .then(function (response) {
            setImageurl(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const history = useHistory();
    const handleCliked=()=>{
        history.push(`/delete`);
    }
    return (
        <div className="design">
            <h1>Add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <p>Product name</p>
            <input type="text" name="name" defaultValue="test" ref={register} />
            <br/>
            <p>Product price</p>
            <input type="text" name="price" placeholder="$ price" ref={register} />
            <br/>
            <p>Product image</p>
            <input name="exampleRequired" type="file" onChange={handleImage} />
            <br/>
            
            <input type="submit" />
            </form>
            <button onClick={()=>handleCliked()}>Manage product</button>

        </div>
    );
};

export default Addproduct;