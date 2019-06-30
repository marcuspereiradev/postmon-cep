import React, { Component } from 'react';

import PostmonAPI from '../services/PostmonAPI';
import Address from '../components/address';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      cep: '',
      address: {}
    }
  }

  getCep = (event) => {
    const cep = event.target.value;
    this.setState({ cep });
  };

  getAddress = async () => {
    const cep = this.state.cep;
    const address = await PostmonAPI.fetchAddress(cep);
    this.setState({ address });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.getCep} value={this.state.cep} placeholder="Digite o cep"/>
        <button type='button' onClick={this.getAddress}>Consultar</button>
        <Address address={this.state.address}/>
      </div>
    )
  }
};

export default Home;
