import React, { useState } from 'react';
import CreditCard from '../credit-card';
import MaskInput from 'react-maskinput';
import './index.model.css';

export default () => {
  const [cardNumberMask, setCardNumberMask] = useState('0000-0000-0000-0000');
  const [expDateMask, setExpDateMask] = useState('mm/yy');

  const handleChange = e => {
    if (
      e.target.value.indexOf('34') === 0 ||
      e.target.value.indexOf('37') === 0
    ) {
      setCardNumberMask('0000-000000-00000');
      return;
    }

    setCardNumberMask('0000-0000-0000-0000');
  };

  return (
    <div className='row d-flex justify-content-center'>
      <div className='card'>
        <div className='card-img-top d-flex justify-content-center'>
          <CreditCard number={cardNumberMask}></CreditCard>
        </div>
        <div className='cardBody p-3 pt-5 shadow rounded'>
          <form>
            <div className='form-row'>
              <div className='col-md-12'>
                <MaskInput
                  onChange={handleChange}
                  maskChar='_'
                  mask={cardNumberMask}
                  alwaysShowMask
                  className='form-control'
                />
              </div>
            </div>
            <div className='form-row mt-3'>
              <div className='col-md-12'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Card Name'
                />
              </div>
            </div>
            <div className='form-row mt-3 d-flex justify-content-between'>
              <div className='col-md-5'>
                <MaskInput
                  alwaysShowMask
                  maskChar='_'
                  mask='00/00'
                  className='form-control'
                />
              </div>
              <div className='col-md-5'>
                <input type='text' className='form-control' placeholder='CVV' />
              </div>
            </div>
            <div className='form-row mt-3'>
              <div className='col-md-12'>
                <button
                  type='submit'
                  className='btn btn-success btn-lg btn-block'
                  disabled
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
