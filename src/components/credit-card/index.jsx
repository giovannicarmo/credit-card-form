import React from 'react';
import './index.model.css';

import Logo from '../../assets/images/png/efigie.png';
import Chip from '../../assets/images/png/card-chip.png';

export default props => (
  <div className='credit-card shadow rounded p-3'>
    <img
      src={Logo}
      className='mx-auto d-block'
      alt='generic credit card logo'
    />
    <img src={Chip} className='mt-3' alt='generic credit card chip' />
    <div className='row d-flex justify-content-center'>
      <label>0000 0000 0000 0000</label>
    </div>
  </div>
);
