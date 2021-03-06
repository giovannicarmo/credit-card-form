import React, { useEffect, useState } from 'react';
import CreditCardFront from '../credit-card-front';
import CreditCardBack from '../credit-card-back';
import MaskInput from 'react-maskinput';
import { FORM_CARD_FIELDS, CREDIT_CARD } from '../../utils/constants/form';
import './index.model.css';

export default () => {
  const [cardNumberMask, setCardNumberMask] = useState('0000-0000-0000-0000');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardCvv, setCardCvv] = useState('000');
  const [cardFlag, setCardFlag] = useState('');
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    observeCardNumber();
    return () => setCardFlag('');
  }, [cardNumber]);

  const observeCardNumber = () => {
    const flagImage = Object.entries(CREDIT_CARD)
      .filter(([_, { prefix }]) =>
        prefix
          .map(required => new RegExp(`^${required}`, 'ig').test(cardNumber))
          .includes(true)
      )
      .slice(0, 1)
      .reduce((findedFlag, [_, { flag }]) => findedFlag || flag, '');
    setCardFlag(flagImage);
  };

  const handleChange = e => {
    switch (e.target.getAttribute('name')) {
      case FORM_CARD_FIELDS.CARD_NUMBER:
        if (
          CREDIT_CARD.AMEX['prefix']
            .concat(CREDIT_CARD.DINNERS_CLUB['prefix'])
            .find(pre => e.target.value.startsWith(pre))
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
        setCardCvv(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className='row d-flex justify-content-center'>
      <div className='card'>
        <div className='card-img-top d-flex justify-content-center'>
          {!rotate && (
            <CreditCardFront
              number={cardNumber}
              date={expDate}
              name={cardName}
              flag={cardFlag}
            />
          )}
          {rotate && <CreditCardBack cvv={cardCvv} flag={cardFlag} />}
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
                  maxLength='21'
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
                  onFocus={() => setRotate(true)}
                  onBlur={() => setRotate(false)}
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
