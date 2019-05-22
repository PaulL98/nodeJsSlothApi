import React, { Component } from 'react';
import './App.css';
import Payment from './Payment/Payment';
import AddPayment from './Payment/PaymentForm';
import AddModel from './Model/ModelForm';
import AddExpense from './Expense/ExpenseForm';
import Expense from './Expense/Expense';
import Header from './Header/Header';
import Model from './Model/Model';
import Compta from './Compta/Compta';
import Stock from './Stock/Stock';
import Sale from './Sale/Sale';


class App extends Component {
  state = {
    payment : <Payment/>,
    expense : <Expense/>,
    sale : <Sale/>,
    model : <Model/>,
    stock: <Stock/>,
    compta : <Compta/>,
    addPayment : <AddPayment/>,
    addExpense : <AddExpense/>,
    AddModel : <AddModel/>,
    currentState : []
  }

   setCurrentState = (state) =>{
     this.setState({currentState : [state]})
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
      Stock={() => this.setCurrentState(this.state.stock)}
      Compta={() => this.setCurrentState(this.state.compta)}
      AddPayment={() => this.setCurrentState(this.state.addPayment)}
      AddExpense={() => this.setCurrentState(this.state.addExpense)}
      AddModel={() => this.setCurrentState(this.state.AddModel)}/>
      {this.state.currentState}
      
    </div>
  );
}

}

export default App;
