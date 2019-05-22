import React, { Component } from 'react';
import axios from 'axios';

class Stock extends Component{
    state = {
      stock : [],
      currentState : [],
      LastName : ''
    }

    componentDidMount(){
        this.getAllStock();
       }

    render(){
  return(
           <div>
           {this.state.stock}
           </div>
       )
  }

      
  getAllStock = () => {
    axios.get('http://localhost:3001/api/stock/allStock').then( response => {
      this.setState({stock : response.data.map((stock, index) => {
       
       return( <tr>
            <td>{stock.LastName}</td>
            <td>{stock.Name}</td>
            <td>{stock.Size}</td>
            <td>{stock.Quantity}</td>
        </tr>);
       })})
    }).then( () => {
      let state = this.state.stock.slice();
      state = <table id="customers"> <tr>
      <th>LastName</th> 
      <th>Name</th> 
      <th>Size</th> 
      <th>Quantity</th> 
    </tr>
    {state}
    </table>;
      this.setState({stock : state});
    });
   }
  
};


export default Stock;