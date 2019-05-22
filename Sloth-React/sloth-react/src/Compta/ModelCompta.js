import React from 'react';

const modelCompta = (props) => {
    
  return(
           <tr>
               <td>{props.Name}</td>
               <td>{props.Income}</td>
           </tr>
       )
};

export default modelCompta;