import React from 'react';

const sellerCompta = (props) => {
  return(
           <tr>
               <td>{props.Name}</td>
               <td>{props.LastName}</td>
               <td>{props.SumSale - (props.SumExpense + props.SumPayment)}</td>
           </tr>
       )
};

export default sellerCompta;