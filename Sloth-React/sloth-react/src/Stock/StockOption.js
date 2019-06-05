import React, { Component } from 'react';
import axios from 'axios';

class StockOption extends Component{
    state = {
      stock : [],
      sellerId: '1',
      currentState : []
    }

    componentDidMount(){
        this.getStock();
       }

    render(){
  return(
           <>
           <option value={0}> Choose Stock </option>
           {this.state.sellers}
           </>
       )
  }

       getStock = () => {
        axios.get('http://localhost:3001/api/stock/StockFromSeller',this.state.sellerId).then( response => {
          this.setState({stock : response.data.map((stock, index) => {
              {console.log(response)}
              return( 
                <option value={stock.Id} >{stock.Name}</option>
               );
           })})
        });
       }
};


export default StockOption;