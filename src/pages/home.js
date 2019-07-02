import React, { Component } from 'react';

import PostmonAPI from '../services/PostmonAPI';
import Address from '../components/address';

import '../styles/home.scss';

class Home extends Component {

  state = {
    cep: '',
    address: {}
  };

  getCep = (event) => {
    const cepReceived = event.target.value;
    const cep = cepReceived.replace(/[^0-9]+/g).match(/\d{0,8}/).join('');
    console.log(cep)
    this.setState({ cep });
  };

  getAddress = async () => {
    const cep = this.state.cep;

    if (cep === '' || cep.length < 8) {
      alert('Digite o CEP com 8 digitos.');
      return;
    };

    this.setState({ cep: '' });

    const address = await PostmonAPI.fetchAddress(cep);

    this.setState({ address });
  };

  render() {
    return (
      <div className='main'>
        <div className='main-content'>
          <input type="text" onChange={this.getCep} value={this.state.cep} placeholder="Digite o cep" />
          {this.state.address && <Address address={this.state.address} />}
          <button className='btn' type='button' onClick={this.getAddress}>Consultar</button>
        </div>
      </div>
    )
  }
};

export default Home;
