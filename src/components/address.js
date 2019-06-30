import React from 'react';
import PropTypes from 'prop-types';

import '../styles/address.scss';

const Address = ({ address }) => (
  <table className='table'>
    <tbody>
      {console.log(address)}
      <tr>
        <th>Logradouro/Nome:</th>
        <td>{address.logradouro}</td>
      </tr>
      <tr>
        <th>Bairro/Distrito:</th>
        <td>{address.bairro}</td>
      </tr>
      <tr>
        <th>Localidade/UF:</th>
        <td>{address.cidade}/{address.estado}</td>
      </tr>
      <tr>
        <th>CEP:</th>
        <td>{address.cep}</td>
      </tr>
    </tbody>
  </table>
);

Address.propTypes = {
  address: PropTypes.object
}

export default Address;
