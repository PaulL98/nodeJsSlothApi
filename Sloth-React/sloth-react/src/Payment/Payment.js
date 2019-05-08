import React from 'react';

const payment = (props) => {
  return(
      <div>
       <table>
           <tr>
               <td>{props.LastName}</td>
               <td>{props.Sum}</td>
               <td>{props.Description}</td>
           </tr>
        </table>
      </div>
       )
};

export default payment;