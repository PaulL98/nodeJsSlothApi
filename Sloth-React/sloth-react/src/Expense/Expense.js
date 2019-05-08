import React from 'react';

const expense = (props) => {
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

export default expense;