import React from 'react';

const model = (props) => {
  return(
           <tr>
               <td>{props.Name}</td>
               <td>{props.TotalProduction}</td>
               <td>{props.TotalPrice}</td>
           </tr>
       )
};

export default model;