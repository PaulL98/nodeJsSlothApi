import React from 'react';

const header = (props) => {
  return(
      <div>
       <table>
           <tr>
               <td><button onClick={props.Payment}>Payment</button></td>
               <td><button onClick={props.Expense}>Expense</button></td>
               <td><button onClick={props.Sale}>Sale</button></td>
               <td><button onClick={props.Model}>Model</button></td>
               <td><button onClick={props.SellerCompta}>Seller Compta</button></td>
               <td><button onClick={props.ModelCompta}>Model Compta</button></td>
           </tr>
        </table>
      </div>
       )
};

export default header;