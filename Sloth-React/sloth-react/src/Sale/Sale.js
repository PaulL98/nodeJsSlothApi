import React from 'react';

const sale = (props) => {
  return(
           <tr>
               <td>{props.Seller}</td>
               <td>{props.Name}</td>
               <td>{props.LastName}</td>
               <td>{props.Model}</td>
               <td>{props.Size}</td>
               <td>{props.Quantity}</td>
               <td>{props.Price}</td>
           </tr>
       )
};

export default sale;