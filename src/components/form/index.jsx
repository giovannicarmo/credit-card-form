import React from 'react';

export default () => (
  <div className='card'>
    <div className='cardBody p-3'>
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
            <button type='submit' className='btn btn-success btn-lg btn-block'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
