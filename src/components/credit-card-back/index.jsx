import React from 'react';

export default props => (
  <div className='credit-card shadow rounded'>
    <div className='mt-3 h-25 bg-dark' />
    <div className='m-3 p-1 w-50 d-flex justify-content-end bg-white'>
      {props.cvv}
    </div>
    <div className='d-flex align-items-end flex-column bd-highlight mt-4 p-3'>
      <img src={props.flag} alt='' />
    </div>
  </div>
);
