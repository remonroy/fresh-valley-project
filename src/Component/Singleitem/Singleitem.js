import React, { useContext } from 'react';
import { userContext } from '../../App';
import image from '../images/image 32.png'
import './Singleitem.css'
import {Link} from "react-router-dom";


const Singleitem = ({ it }) => {
    const {price,iamgeUrl,name,quantiti,_id} = it
    const productInfo=it;
    const [loogeduser,setLoogeduser]=useContext(userContext)
    const handleClickorder=(product)=>{
       const orderInfo={...loogeduser,product:product,date:(new Date()).toDateString("dd/MM/yyy")}
       fetch("https://enigmatic-anchorage-12133.herokuapp.com/addOrder",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(orderInfo)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
       })

    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantiti</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={iamgeUrl} alt=""/></td>
                        <td>{name}</td>
                        <td>{quantiti}</td>
                        <td>$ {price}</td>
                        
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td colspan="4"><button onClick={()=>handleClickorder(productInfo)}><Link to={`/order/${_id}`}>Check out</Link></button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Singleitem;