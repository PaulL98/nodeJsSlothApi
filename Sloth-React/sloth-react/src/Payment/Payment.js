import React, { Component } from 'react';
import axios from 'axios';

class Payment extends Component{
    state = {
      payment : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllPayment();
       }

    render(){
  return(
           <div>
           {this.state.payment}
           </div>
       )
  }

       getAllPayment = () => {
        axios.get('http://localhost:3001/api/payment/allPayment').then( response => {
          this.setState({payment : response.data.map((payment, index) => {
            return( 
                <tr>
               <td>{payment.LastName}</td>
               <td>{payment.Sum}</td>
               <td>{payment.Description}</td>
           </tr>
          );
           })})
        }).then( () => {
          let state = this.state.payment.slice();
          state = <table id="customers"> <tr>
          <th>LastName</th>
          <th>Sum</th> 
          <th>Description</th> 
        </tr>
        {state}
        </table>;
          this.setState({payment : state});
        });
       }
};


export default Payment;