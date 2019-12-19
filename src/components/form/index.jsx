import React, { useState } from 'react';
import CreditCard from '../credit-card';
import MaskInput from 'react-maskinput';
import { FORM_CARD_FIELDS } from '../../utils/constants/form';
import './index.model.css';

export default () => {
  const [cardNumberMask, setCardNumberMask] = useState('0000-0000-0000-0000');
  const [cardNumber, setCardNumber] = useState();
  const [expDate, setExpDate] = useState();
  const [cardName, setCardName] = useState();
  const [cvv, setCvv] = useState();

  const handleChange = e => {
    switch (e.target.getAttribute('name')) {
      case FORM_CARD_FIELDS.CARD_NUMBER:
        if (
          e.target.value.indexOf('34') === 0 ||
          e.target.value.indexOf('37') === 0
        ) {
          setCardNumberMask('0000-000000-00000');
        } else {
          setCardNumberMask('0000-0000-0000-0000');
        }
        setCardNumber(e.target.value.split('-').join(' '));
        break;
      case FORM_CARD_FIELDS.EXP_DATE:
        setExpDate(e.target.value);
        break;
      case FORM_CARD_FIELDS.CARD_NAME:
        setCardName(e.target.value);
        break;
      case FORM_CARD_FIELDS.CVV:
        setCvv(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className='row d-flex justify-content-center'>
      <div className='card'>
        <div className='card-img-top d-flex justify-content-center'>
          <CreditCard
            number={cardNumber}
            date={expDate}
            name={cardName}
          ></CreditCard>
        </div>
        <div className='cardBody p-3 pt-5 shadow rounded'>
          <form>
            <div className='form-row'>
              <div className='col-md-12'>
                <MaskInput
                  name={FORM_CARD_FIELDS.CARD_NUMBER}
                  onChange={handleChange}
                  maskChar=''
                  mask={cardNumberMask}
                  className='form-control'
                  placeholder='Card number'
                />
              </div>
            </div>
            <div className='form-row mt-3'>
              <div className='col-md-12'>
                <input 
                  name={FORM_CARD_FIELDS.CARD_NAME}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='Card Name'
                  maxLength="21"
                />
              </div>
            </div>
            <div className='form-row mt-3 d-flex justify-content-between'>
              <div className='col-md-5'>
                <MaskInput
                  name={FORM_CARD_FIELDS.EXP_DATE}
                  onChange={handleChange}
                  mask='00/00'
                  className='form-control'
                  placeholder='Exp. Date'
                />
              </div>
              <div className='col-md-5'>
                <MaskInput
                  name={FORM_CARD_FIELDS.CVV}
                  onChange={handleChange}
                  mask='000'
                  className='form-control'
                  placeholder='CVV'
                />
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
