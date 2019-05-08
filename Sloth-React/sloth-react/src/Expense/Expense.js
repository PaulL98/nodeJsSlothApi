import React from 'react';

const expense = (props) => {
  return(
           <tr>
               <td>{props.LastName}</td>
               <td>{props.Sum}</td>
               <td>{props.Description}</td>
           </tr>
       )
};

export default expense;