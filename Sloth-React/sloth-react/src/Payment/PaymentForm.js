import React from 'react';
import axios from 'axios';

const payment = (props) => {
  return(
          <div>
              <h1>Add Payment</h1>
              <form onSubmit={props.onSubmit}>
              <label> Id Seller: <input type="text" name="idSeller" /> </label> <br/>
              <label> Sum: <input type="text" name="sum" /> </label> <br/>
              <label> Description: <input type="text" name="description" /> </label> <br/>
              <input type="submit" value="Submit" />
              </form>
         </div>
       )
};

export default payment;