import React from 'react';
import PropTypes from 'prop-types';

import '../styles/address.scss';

const Address = ({ address }) => (

  <table className='table'>
    {
      Object.entries(address).filter((item) =>
        !['cidade_info', 'estado_info'].includes(item[0]))
        .map((item, index) => {

          if (item[0] === 'estado')
            item[1] = address.estado_info.nome;
          else if (item[1] === '') return [];

          return <tbody key={index}>
            <tr>
              <th>{item[0].charAt(0).toUpperCase() + item[0].slice(1)}:</th>
            </tr>
            <tr>
              <td>{item[1]}</td>
            </tr>
          </tbody>
        })
    }
  </table>
)

Address.propTypes = {
  address: PropTypes.object
}

export default Address;
