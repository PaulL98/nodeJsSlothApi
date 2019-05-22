import React, { Component } from 'react';
import axios from 'axios';
import SellerOption from '../Seller/SellerOption';

class AddExpense extends Component {
    state = {
        idSeller: '',
        sum: '',
        sellers : <SellerOption/>,
        description: ''
    }
    
    postDataHandler = () => {
        const data = {
            idSeller: this.state.idSeller,
            sum: this.state.sum,
            description: this.state.description
        };
        axios.post('http://localhost:3001/api/expense/addExpense', data)
            .then(response => {
                console.log(response);
                this.setState({idSeller: ''});
                this.setState({sum: ''});
                this.setState({description: ''});
            });
    }

    render () {
        return (
            <div>
                <h1>Add a Post</h1>
                <label>idSeller</label>
               <select value={this.state.idSeller}  onChange={(event) => this.setState({idSeller: event.target.value})}>
                  {this.state.sellers}
                </select>
                <label>Sum</label>
                <input type="text" value={this.state.sum} onChange={(event) => this.setState({sum: event.target.value})} />
                <label>Description</label>
                <input type="text" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default AddExpense;