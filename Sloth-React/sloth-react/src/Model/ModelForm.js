import React, { Component } from 'react';
import axios from 'axios';

class AddModel extends Component {
    state = {
        name: '',
        totalProduction: '',
        totalPrice: '',
        isClothes: ''
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name,
            totalProduction: this.state.totalProduction,
            totalPrice: this.state.totalPrice,
            isClothes: this.state.isClothes
        };
        axios.post('http://localhost:3001/api/model/addModel', data)
            .then(response => {
                console.log(response);
                this.setState({name: ''});
                this.setState({totalProduction: ''});
                this.setState({totalPrice: ''});
                this.setState({isClothes: ''});
            });
    }

    render () {
        return (
            <div>
                <h1>Add a Post</h1>
                <label>name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>totalProduction</label>
                <input type="text" value={this.state.totalProduction} onChange={(event) => this.setState({totalProduction: event.target.value})} />
                <label>totalPrice</label>
                <input type="text" value={this.state.totalPrice} onChange={(event) => this.setState({totalPrice: event.target.value})} />
                <label>isClothes</label>
                <select value={this.state.isClothes}  onChange={(event) => this.setState({isClothes: event.target.value})}>
                <option value={0} >Choose</option>
                <option value={0} >Not Clothes</option>
                <option value={1} >Clothes</option>
                </select>   
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default AddModel;