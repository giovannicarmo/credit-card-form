import React, { useEffect, useState } from 'react';
import CreditCardFront from '../credit-card-front';
import CreditCardBack from '../credit-card-back';
import MaskInput from 'react-maskinput';
import { FORM_CARD_FIELDS } from '../../utils/constants/form';
import Amex from '../../assets/images/png/logo-amex.png';
import DinersClub from '../../assets/images/png/logo-dinersclub.png';
import Hipercard from '../../assets/images/png/logo-hipercard.png';
import Mastercard from '../../assets/images/png/logo-mastercard.png';
import Visa from '../../assets/images/png/logo-visa.png';
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
    if (
      (cardNumber.indexOf('34') === 0 || cardNumber.indexOf('37') === 0) &&
      cardFlag !== Amex
    ) {
      setCardFlag(Amex);
    } else if (
      (cardNumber.indexOf('36') === 0 ||
        cardNumber.indexOf('38') === 0 ||
        cardNumber.indexOf('300') === 0 ||
        cardNumber.indexOf('301') === 0 ||
        cardNumber.indexOf('302') === 0 ||
        cardNumber.indexOf('303') === 0 ||
        cardNumber.indexOf('304') === 0 ||
        cardNumber.indexOf('305') === 0) &&
      cardFlag !== DinersClub
    ) {
      setCardFlag(DinersClub);
    } else if (cardNumber.indexOf('6062') === 0 && cardFlag !== Hipercard) {
      setCardFlag(Hipercard);
    } else if (
      (cardNumber.indexOf('51') === 0 ||
        cardNumber.indexOf('52') === 0 ||
        cardNumber.indexOf('53') === 0 ||
        cardNumber.indexOf('54') === 0 ||
        cardNumber.indexOf('55') === 0) &&
      cardFlag !== Mastercard
    ) {
      setCardFlag(Mastercard);
    } else if (cardNumber.indexOf('4') === 0 && cardFlag !== Visa) {
      setCardFlag(Visa);
    } else {
      setCardFlag('');
    }
  }, [cardNumber]);

  const handleChange = e => {
    switch (e.target.getAttribute('name')) {
      case FORM_CARD_FIELDS.CARD_NUMBER:
        if (
          e.target.value.indexOf('34') === 0 ||
          e.target.value.indexOf('37') === 0 ||
          e.target.value.indexOf('36') === 0 ||
          e.target.value.indexOf('38') === 0 ||
          e.target.value.indexOf('300') === 0 ||
          e.target.value.indexOf('301') === 0 ||
          e.target.value.indexOf('302') === 0 ||
          e.target.value.indexOf('303') === 0 ||
          e.target.value.indexOf('304') === 0 ||
          e.target.value.indexOf('305') === 0
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
