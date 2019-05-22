import React, { Component } from 'react';
import axios from 'axios';

class Sale extends Component{
    state = {
      sale : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllSale();
       }

    render(){
  return(
           <div>
           {this.state.sale}
           </div>
       )
  }

      
  getAllSale = () => {
    axios.get('http://localhost:3001/api/sale/allSale').then( response => {
      this.setState({sale : response.data.map((sale, index) => {
        return( <tr>
            <td>{sale.Seller}</td>
            <td>{sale.Name}</td>
            <td>{sale.LastName}</td>
            <td>{sale.Model}</td>
            <td>{sale.Size}</td>
            <td>{sale.Quantity}</td>
            <td>{sale.Price}</td>
        </tr>);
       })})
    }).then( () => {
      let state = this.state.sale.slice();
      state = <table id="customers"> <tr>
      <th>Seller</th>
      <th>Name</th> 
      <th>Lastname</th> 
      <th>Model</th> 
      <th>Size</th> 
      <th>Quantity</th> 
      <th>Price</th>
    </tr>
    {state}
    </table>;
      this.setState({sale : state});
    });
   }
  
};


export default Sale;