import React, { Component } from 'react';

import PostmonAPI from '../services/PostmonAPI';
import Address from '../components/address';
import Loading from '../components/loading';

import '../styles/home.scss';

class Home extends Component {

  state = {
    cep: '',
    address: null,
    isFetching: false
  };

  setCep = (event) => {
    const cepReceived = event.target.value;
    const cep = cepReceived.replace(/[^0-9]+/g).match(/\d{0,8}/).join('');

    this.setState({ cep, address: false });
  };

  getAddress = async () => {
    this.setState({ address: false })

    const cep = this.state.cep;

    if (cep === '' || cep.length < 8) {
      alert('Digite o CEP com 8 digitos.');
      return;
    };

    this.setState({ isFetching: true });

    setTimeout(async () => {
      const address = await PostmonAPI.fetchAddress(cep);
  
      this.setState({ address });
  
      this.setState({ isFetching: false })
    }, 2000);

  };

  getEnter = (event) => {
    const enter = event.keyCode;

    if (enter === 13) {
      this.getAddress();
    }
  };

  render() {
    return (
      <div className='main'>
        <div className='main-content'>
          <input
            type="text"
            disabled={this.state.isFetching}
            onChange={this.setCep}
            onKeyUp={this.getEnter}
            value={this.state.cep}
            placeholder="Digite o cep"
          />
          {this.state.isFetching && <Loading />}
          {this.state.address === undefined && <p className='cep-error'>CEP inválido ou ele não existe!</p>}
          {this.state.address && <Address address={this.state.address} />}
          <button className='btn' type='button' onClick={this.getAddress}>Consultar</button>
        </div>
      </div>
    )
  }
};

export default Home;
