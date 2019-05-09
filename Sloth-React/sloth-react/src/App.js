import React, { Component } from 'react';
import './App.css';
import Payment from './Payment/Payment';
import PaymentForm from './Payment/PaymentForm';
import Expense from './Expense/Expense';
import Header from './Header/Header';
import Model from './Model/Model';
import SellerCompta from './Compta/SellerCompta';
import ModelCompta from './Compta/ModelCompta';
import Sale from './Sale/Sale';
import axios from 'axios';

class App extends Component {
  state = {
    payment : [],
    expense : [],
    sale : [],
    model : [],
    comptaSeller : [],
    comptaModel : [],
    currentState : []
  }

  componentDidMount(){
    this.getAllPayment();
    this.getAllExpense();
    this.getAllSale();
    this.getAllModel();
    this.getSellerCompta();
    this.getModelCompta();
   }

   setCurrentState = (state) =>{
     this.setState({currentState : [state]})
   }

   handleSubmit = () =>{
    axios.post('http://localhost:3001/api/payment/addPayment');     
   }

render(){
  return (
    <div className="App">
      <h1> Compta</h1>
      <Header
      Payment={() => this.setCurrentState(this.state.payment)}
      Expense={() => this.setCurrentState(this.state.expense)}
      Sale={() => this.setCurrentState(this.state.sale)}
      Model={() => this.setCurrentState(this.state.model)}
      SellerCompta={() => this.setCurrentState(this.state.comptaSeller)}
      ModelCompta={() => this.setCurrentState(this.state.comptaModel)}/>
      {this.state.currentState}
    </div>
  );
}

getAllPayment = () => {
  axios.get('http://localhost:3001/api/payment/allPayment').then( response => {
    this.setState({payment : response.data.map((payment, index) => {
      return( <Payment
       LastName={payment.LastName}
       Sum={payment.Sum}
       Description={payment.Description}
       key={payment.Id}
     />);
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

 getAllModel = () => {
  axios.get('http://localhost:3001/api/model/allModel').then( response => {
    this.setState({model : response.data.map((model, index) => {
      return( <Model
       Name={model.Name}
       TotalProduction={model.TotalProduction}
       TotalPrice={model.TotalPrice}
       key={model.Id}
     />);
     })})
  }).then( () => {
    let state = this.state.model.slice();
    state = <table id="customers"> <tr>
    <th>Name</th>
    <th>Total Production</th> 
    <th>Total Price</th> 
  </tr>
  {state}
  </table>;
    this.setState({model : state});
  });
 }

 getAllSale = () => {
  axios.get('http://localhost:3001/api/sale/allSale').then( response => {
    this.setState({sale : response.data.map((sale, index) => {
      return( <Sale
       Seller={sale.Seller}
       Name={sale.Name}
       LastName={sale.LastName}
       Model={sale.Model}
       Size={sale.Size}
       Quantity={sale.Quantity}
       Price={sale.Price}
       key={sale.Id}
     />);
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

 getAllExpense = () => {
  axios.get('http://localhost:3001/api/expense/allExpense').then( response => {console.log(response)});
  axios.get('http://localhost:3001/api/expense/allExpense').then( response => {
    this.setState({expense : response.data.map((expense, index) => {
      return( <Expense
       LastName={expense.LastName}
       Sum={expense.Sum}
       Description={expense.Description}
       key={expense.Id}
     />);
     })})
     console.log(this.state.expense);
  }).then( () => {
    let state = this.state.expense.slice();
    state = <table id="customers"> <tr>
    <th>LastName</th>
    <th>Sum</th> 
    <th>Description</th> 
  </tr>
  {state}
  </table>;
    this.setState({expense : state});
  });
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

export default App;
