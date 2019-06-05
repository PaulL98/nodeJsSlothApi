import React, { Component } from 'react';
import axios from 'axios';

class ModelOption extends Component{
    state = {
      models : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllModel();
       }

    render(){
  return(
           <>
           <option value={0}> Choose Model </option>
           {this.state.models}
           </>
       )
  }

       getAllModel = () => {
        axios.get('http://localhost:3001/api/model/allModel').then( response => {
          this.setState({models : response.data.map((model, index) => {
              return( 
                <option value={model.Id} >{model.Name}</option>
               );
           })})
        });
       }
};


export default ModelOption;