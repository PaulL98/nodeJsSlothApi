import React, { Component } from 'react';
import axios from 'axios';
import SellerOption from '../Seller/SellerOption';
import StockOption from '../Stock/StockOption';
import ClientOption from '../Client/ClientOption';
import ModelOption from '../Model/ModelOption';

class AddSale extends Component {
    state = {
        idSeller: '',
        idModel: '',
        idClient: '0',
        size: '',
        quantity: '',
        price: '',
        name: '',
        lastName: '',
        stock: <StockOption sellerId={this.idSeller} />,
        sellers : <SellerOption/>,
        clients : <ClientOption/>,
        models : <ModelOption/>
    }

    postDataHandler = () => {
        if(this.state.idClient === '0'){
           const clientData = {
            name: this.state.name,
            lastName: this.state.lastName
           };
           axios.post('http://localhost:3001/api/client/addClient', clientData)
           .then(response => {
               axios.post('http://localhost:3001/api/client/client',clientData).then(response => {
                   console.log(response);
                   this.setState({idClient: response.data[0].Id});
                   const data = {
                    idSeller: this.state.idSeller,
                    idModel: this.state.idModel,
                    idClient: this.state.idClient,
                    size : this.state.size,
                    quantity: this.state.quantity,
                    price: this.state.price
                };
                axios.post('http://localhost:3001/api/sale/addSale', data)
                    .then(response => {
                        console.log(response);
                        this.setState({idClient: ''});
                        this.setState({idModel: ''});
                        this.setState({idSeller: ''});
                        this.setState({size: ''});
                        this.setState({quantity: ''});
                        this.setState({price: ''});
                    });
               });
           });
        }else{
        const data = {
            idSeller: this.state.idSeller,
            idModel: this.state.idModel,
            idClient: this.state.idClient,
            size : this.state.size,
            quantity: this.state.quantity,
            price: this.state.price
        };
        axios.post('http://localhost:3001/api/sale/addSale', data)
            .then(response => {
                console.log(response);
                this.setState({idClient: ''});
                this.setState({idModel: ''});
                this.setState({idSeller: ''});
                this.setState({size: ''});
                this.setState({quantity: ''});
                this.setState({price: ''});
            });
        }
    }

    render () {
        if(this.state.idClient === '0'){
            return (
                <div>
                    <h1>Add a Post</h1>
                    <label>idSeller</label>
                   <select value={this.state.idSeller} onChange={(event) => this.setState({idSeller: event.target.value})}>
                      {this.state.sellers}
                    </select>
                    <label>idClient</label>
                   <select value={this.state.idClient} onChange={(event) => this.setState({idClient: event.target.value})}>
                      {this.state.clients}
                    </select>
                       <label>name</label>
                       <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                       <label>last name</label>
                       <input type="text" value={this.state.lastName} onChange={(event) => this.setState({lastName: event.target.value})} />
                       <label>Model</label>
                    <select value={this.state.idModel} onChange={(event) => this.setState({idModel: event.target.value})}>
                      {this.state.models}
                    </select>
                    <label>Size</label>
                    <input type="text" value={this.state.size} onChange={(event) => this.setState({size: event.target.value})} />
                    <label>Price</label>
                    <input type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                    <label>quantity</label>
                    <input type="text" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />
                    <button onClick={this.postDataHandler}>Add Post</button>
                    <StockOption sellerId={this.idSeller} />
                </div>
                
            );
        }else{
            return (
                <div>
                    <h1>Add a Post</h1>
                    <label>idSeller</label>
                   <select value={this.state.idSeller} onChange={(event) => this.setState({idSeller: event.target.value})}>
                      {this.state.sellers}
                    </select>
                    <label>idClient</label>
                   <select value={this.state.idClient} onChange={(event) => this.setState({idClient: event.target.value})}>
                      {this.state.clients}
                    </select>
                    <label>Model</label>
                    <select value={this.state.idModel} onChange={(event) => this.setState({idModel: event.target.value})}>
                      {this.state.models}
                    </select>
                    <label>Size</label>
                    <input type="text" value={this.state.size} onChange={(event) => this.setState({size: event.target.value})} />
                    <label>Price</label>
                    <input type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                    <label>quantity</label>
                    <input type="text" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />
                    <button onClick={this.postDataHandler}>Add Post</button>
                    <StockOption sellerId={this.idSeller} />
                </div>
                
            );
        }
        
    }
}

export default AddSale;