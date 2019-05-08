import React from 'react';

const payment = (props) => {
  return(
           <tr>
               <td>{props.LastName}</td>
               <td>{props.Sum}</td>
               <td>{props.Description}</td>
           </tr>
       )
};

export default payment;