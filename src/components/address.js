import React from 'react';
import PropTypes from 'prop-types';

import '../styles/address.scss';

const Address = ({ address }) => (

  <div className='address-content'>
    <label>Logradouro/Nome:</label>
    <p>- {address.logradouro}</p>
    <label>Bairro/Distrito:</label>
    <p>- {address.bairro}</p>
    <label>Cidade:</label>
    <p>- {address.cidade}</p>
    <label>Estado/UF:</label>
    <p>- {address.estado_info.nome}/{address.estado}</p>
    <label>CEP:</label>
    <p>- {address.cep}</p>
  </div>
)

Address.propTypes = {
  address: PropTypes.object
}

export default Address;
