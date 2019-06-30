import React, { Component } from 'react';

import PostmonAPI from '../services/PostmonAPI';
import Address from '../components/address';

import '../styles/home.scss';

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
      <div className='main'>
        <div className='main-content'>
          <input type="text" onChange={this.getCep} value={this.state.cep} placeholder="Digite o cep"/>
          <Address address={this.state.address}/>
          <button className='btn' type='button' onClick={this.getAddress}>Consultar</button>
        </div>
      </div>
    )
  }
};

export default Home;
