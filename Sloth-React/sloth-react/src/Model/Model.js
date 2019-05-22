import React, { Component } from 'react';
import axios from 'axios';

class Model extends Component{
    state = {
      model : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllModel();
       }

    render(){
  return(
           <div>
           {this.state.model}
           </div>
       )
  }

      
getAllModel = () => {
    axios.get('http://localhost:3001/api/model/allModel').then( response => {
      this.setState({model : response.data.map((model, index) => {
        return( <tr>
            <td>{model.Name}</td>
            <td>{model.TotalProduction}</td>
            <td>{model.TotalPrice}</td>
        </tr>);
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
  
};


export default Model;