import React from 'react';
import images from '../images/image 32.png';
import './Itemdelte.css'
const Itemdelte = ({dlt}) => {
    const{name,iamgeUrl,price,quantiti,_id}=dlt
    
    const handleDelete=(id)=>{
        
        fetch(`http://localhost:4500/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    
    return (
        <div>
            <div className="">
           
                <div className="">
                    <table>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantiti</th>
                            <th>Price</th>
                            {/* <th>date</th> */}
                            <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={iamgeUrl} alt=""/></td>
                                <td>{name}</td>
                                <td>{quantiti}</td>
                                <td>$ {price}</td>
                                {/* <td>{date.date}</td> */}
                                <td><button onClick={()=>handleDelete(_id)}>Delete</button></td>
                            </tr>
                        </tbody>
                            
                    </table>
                </div>
         </div>
        </div>
    );
};

export default Itemdelte;