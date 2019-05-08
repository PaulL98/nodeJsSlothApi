import React, { Component } from 'react';
import './App.css';
import Payment from './Payment/Payment';
import Expense from './Expense/Expense';
import Header from './Header/Header';
import Sale from './Sale/Sale';
import axios from 'axios';

class App extends Component {
  state = {
    payment : [],
    expense : [],
    sale : [],
    currentState : []
  }

  componentDidMount(){
    this.getAllPayment();
    this.getAllExpense();
    this.getAllSale();
   }

   setCurrentState = (state) =>{
     this.setState({currentState : [state]})
   }

render(){
  return (
    <div className="App">
      <h1>Sloth Compta</h1>
      <Header
      Payment={() => this.setCurrentState(this.state.payment)}
      Expense={() => this.setCurrentState(this.state.expense)}
      Sale={() => this.setCurrentState(this.state.sale)}/>
      
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

}

export default App;
