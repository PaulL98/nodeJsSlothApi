import React, { Component } from 'react';
import axios from 'axios';

class Expense extends Component{
    state = {
      expense : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllPayment();
       }

    render(){
  return(
           <div>
           {this.state.expense}
           </div>
       )
  }

       getAllPayment = () => {
        axios.get('http://localhost:3001/api/expense/allExpense').then( response => {
          this.setState({expense : response.data.map((expense, index) => {
            return( 
                <tr>
               <td>{expense.LastName}</td>
               <td>{expense.Sum}</td>
               <td>{expense.Description}</td>
           </tr>
          );
           })})
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
};


export default Expense;