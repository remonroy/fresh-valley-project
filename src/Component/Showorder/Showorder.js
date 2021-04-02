import React from 'react';
import image from '../images/image 32.png';
import "./Showorder.css";
const Showorder = ({show}) => {
    const {iamgeUrl,price,quantiti,name}=show.product
    const time=show
    
    return (
        <div className="main">
            
           <div className="rightsite">
            <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantiti</th>
                            <th>Price</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={iamgeUrl} alt=""/></td>
                            <td>{name}</td>
                            <td>{quantiti}</td>
                            <td>$ {price}</td>
                            <td>{time.date}</td>
                        </tr>
                    </tbody>
                    
                </table>
           </div>
        </div>
    );
};

export default Showorder;