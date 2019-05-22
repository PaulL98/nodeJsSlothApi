import React, { Component } from 'react';
import axios from 'axios';

class SellerOption extends Component{
    state = {
      sellers : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllSeller();
       }

    render(){
  return(
           <>
           <option value={0}> Choose Seller </option>
           {this.state.sellers}
           </>
       )
  }

       getAllSeller = () => {
        axios.get('http://localhost:3001/api/seller/allSeller').then( response => {
          this.setState({sellers : response.data.map((seller, index) => {
              return( 
                <option value={seller.Id} >{seller.LastName}</option>
               );
           })})
        });
       }
};


export default SellerOption;