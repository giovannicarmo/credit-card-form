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
    <img src={Chip} className='mt-1' alt='generic credit card chip' />
    <div className='row d-flex justify-content-between'>
      <div className='col-md-8 mt-3'>
        <span>{props.number || "0000 0000 0000 0000"}</span>
      </div>
      <div className='col-md-4'>
        <div className='d-flex align-items-start flex-column'>
          <div>
            <label>Exp. date:</label>
          </div>
          <div className='mt-075'>
            <span className='card-date'>{props.date || "00/0000"}</span>
          </div>
        </div>
      </div>
    </div>
    <div className='row d-flex justify-content-between'>
      <div className='col-md-6'>
        <div>
          <label>Card name:</label>
        </div>
        <div className='mt-075'>
<span className='text-uppercase'>{props.name || "your name here"}</span>
        </div>
      </div>
      <div className='col-md-6 text-right'>
        <img src={MasterCard} alt='card flag logo' />
      </div>
    </div>
  </div>
);
