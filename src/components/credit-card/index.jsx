import React from 'react';
import './index.model.css';

import Logo from '../../assets/images/png/efigie.png';
import Chip from '../../assets/images/png/card-chip.png';
import MasterCard from '../../assets/images/png/logo-mastercard.png';

export default props => (
  <div className='credit-card shadow rounded p-3'>
    <img
      src={Logo}
      className='mx-auto d-block'
      alt='generic credit card logo'
    />
    <img src={Chip} alt='generic credit card chip' />
    <div className='row d-flex justify-content-between'>
      <div className='col-md-8 mt-2'>
        <span>{props.number}</span>
      </div>
      <div className='col-md-4'>
        <div className='d-flex align-items-start flex-column'>
          <div>
            <label>Exp. date:</label>
          </div>
          <div className='mt-075'>
            <span className='card-date'>{props.date || '00/00'}</span>
          </div>
        </div>
      </div>
    </div>
    <div className='row d-flex justify-content-between'>
      <div className='col-md-9'>
        <div className="mt-075">
          <label>Card name:</label>
        </div>
        <div className=''>
          <span className='text-uppercase'>{props.name}</span>
        </div>
      </div>
      <div className='col-md-3 text-right'>
        <img src={MasterCard} alt='card flag logo' />
      </div>
    </div>
  </div>
);
