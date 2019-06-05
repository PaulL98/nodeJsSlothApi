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
               <td><button onClick={props.Stock}>Stock</button></td>
               <td><button onClick={props.Compta}>Compta</button></td>
           </tr>
           <tr>
               <td><button onClick={props.AddPayment}>Add Payment</button></td>
               <td><button onClick={props.AddExpense}>Add Expense</button></td>
               <td><button onClick={props.AddModel}>Add Model</button></td>
               <td><button onClick={props.AddSale}>Add Sale</button></td>
           </tr>
        </table>
      </div>
       )
};

export default header;