import React from 'react';
import CreditCard from '../credit-card';
import './index.model.css';

export default () => (
  <div className='row d-flex justify-content-center'>
    <div className='card'>
      <div className='card-img-top d-flex justify-content-center'>
        <CreditCard></CreditCard>
      </div>
      <div className='cardBody p-3 pt-5 shadow rounded'>
        <form>
          <div className='form-row'>
            <div className='col-md-12'>
              <input
                type='text'
                className='form-control'
                placeholder='Card Number'
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
              <input
                type='text'
                className='form-control'
                placeholder='Exp. Date'
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
