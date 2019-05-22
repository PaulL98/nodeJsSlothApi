import React, { Component } from 'react';
import SellerCompta from './SellerCompta';
import ModelCompta from './ModelCompta';
import axios from 'axios';

class Compta extends Component {
  state = {
      profit : [],
    comptaSeller : [],
    comptaModel : [],
    currentState : []
  }

  componentDidMount(){
    this.getSellerCompta();
    this.getModelCompta();
    this.getProfit();
   }

render(){
  return (
    <div className="App">
      <h1> Profit :</h1>
      {this.state.profit}
      <h1> Profit Per Model :</h1>
      {this.state.comptaModel}
      <h1> Seller :</h1>
      {this.state.comptaSeller}
    </div>
  );
}

getProfit = () => {
    axios.get('http://localhost:3001/api/compta/compta').then( response => {console.log(response)});
    axios.get('http://localhost:3001/api/compta/compta').then( response => {
      this.setState({profit : response.data.map((compta, index) => {
        return( <p>{compta.SaleIncome - (compta.Payment + compta.MarchandisePrice + compta.Expense)} Chf </p>);
       })})
       console.log(this.state.comptaSeller);
    })
   }

 getSellerCompta = () => {
  axios.get('http://localhost:3001/api/compta/sellerCompta').then( response => {console.log(response)});
  axios.get('http://localhost:3001/api/compta/sellerCompta').then( response => {
    this.setState({comptaSeller : response.data.map((compta, index) => {
      return( <SellerCompta
       Name={compta.Name}
       LastName={compta.LastName}
       SumSale={compta.SumSale}
       SumExpense={compta.SumExpense}
       SumPayment={compta.SumPayment}
       key={compta.Id}
     />);
     })})
     console.log(this.state.comptaSeller);
  }).then( () => {
    let state = this.state.comptaSeller.slice();
    state = <table id="customers"> <tr>
    <th>Name</th>
    <th>Last Name</th>
    <th>Sum</th> 
  </tr>
  {state}
  </table>;
    this.setState({comptaSeller : state});
  });
 }

 getModelCompta = () => {
  axios.get('http://localhost:3001/api/compta/modelCompta').then( response => {console.log(response)});
  axios.get('http://localhost:3001/api/compta/modelCompta').then( response => {
    this.setState({comptaModel : response.data.map((compta, index) => {
      return( <ModelCompta
       Name={compta.Name}
       Income={compta.Income}
       key={compta.Id}
     />);
     })})
     console.log(this.state.comptaModel);
  }).then( () => {
    let state = this.state.comptaModel.slice();
    state = <table id="customers"> <tr>
    <th>Name</th>
    <th>Income</th>
  </tr>
  {state}
  </table>;
    this.setState({comptaModel : state});
  });
 }

}

export default Compta;
