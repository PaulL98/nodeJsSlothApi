import React, { Component } from 'react';
import axios from 'axios';

class ClientOption extends Component{
    state = {
      clients : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllClient();
       }

    render(){
  return(
           <>
           <option value={0}> Choose Client </option>
           {this.state.clients}
           </>
       )
  }

       getAllClient = () => {
        axios.get('http://localhost:3001/api/client/allClient').then( response => {
          this.setState({clients : response.data.map((client, index) => {
              return( 
                <option value={client.Id} >{client.Name} {client.LastName}</option>
               );
           })})
        });
       }
};


export default ClientOption;