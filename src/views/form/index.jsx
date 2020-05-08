import React, { useEffect, useState } from 'react';
import MaskInput from 'react-maskinput';
import MaskedTextInput from 'react-text-mask';
import CardTables from '../../components/card-tables';
import CreditCardBack from '../../components/credit-card-back';
import CreditCardFront from '../../components/credit-card-front';
import {
  CREDIT_CARD_BRAND,
  FORM_CARD_FIELDS,
} from '../../utils/constants/form';

export default () => {
  const [cardNumberMask, setCardNumberMask] = useState('0000-0000-0000-0000');
  const [rotate, setRotate] = useState(false);
  const [card, setCard] = useState({
    number: '',
    name: '',
    date: '',
    cvv: '',
    flag: '',
  });
  const [cardList, setCardList] = useState(
    JSON.parse(window.localStorage.getItem('cardList')) || []
  );

  useEffect(() => {
    observeCardNumber();
    return () => setCard({ ...card, flag: '' });
  }, [card.number]);

  useEffect(() => {
    window.localStorage.setItem('cardList', JSON.stringify(cardList));
  });

  const observeCardNumber = () => {
    const flagImage = Object.entries(CREDIT_CARD_BRAND)
      .filter(([_, { prefix }]) =>
        prefix
          .map((required) => new RegExp(`^${required}`, 'ig').test(card.number))
          .includes(true)
      )
      .slice(0, 1)
      .reduce((findedFlag, [_, { flag }]) => findedFlag || flag, '');
    setCard({ ...card, flag: flagImage });
  };

  const handleChange = (e) => {
    switch (e.target.getAttribute('name')) {
      case FORM_CARD_FIELDS.CARD_NUMBER:
        if (
          CREDIT_CARD_BRAND.AMEX['prefix']
            .concat(CREDIT_CARD_BRAND.DINNERS_CLUB['prefix'])
            .find((pre) => e.target.value.startsWith(pre))
        ) {
          setCardNumberMask('0000-000000-00000');
        } else {
          setCardNumberMask('0000-0000-0000-0000');
        }
        setCard({ ...card, number: e.target.value.split('-').join(' ') });
        break;
      case FORM_CARD_FIELDS.EXP_DATE:
        setCard({ ...card, date: e.target.value });
        break;
      case FORM_CARD_FIELDS.CARD_NAME:
        setCard({ ...card, name: e.target.value });
        break;
      case FORM_CARD_FIELDS.CVV:
        setCard({ ...card, cvv: e.target.value });
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardList([...cardList, card]);
    setCard({ number: '', name: '', date: '', cvv: '', flag: '' });
  };

  return (
    <>
      <div className='row d-flex justify-content-center'>
        <div className='card'>
          <div className='card-img-top d-flex justify-content-center'>
            {!rotate && (
              <CreditCardFront
                number={card.number}
                date={card.date}
                name={card.name}
                flag={card.flag}
              />
            )}
            {rotate && <CreditCardBack cvv={card.cvv} flag={card.flag} />}
          </div>
          <div className='cardBody p-3 pt-5 shadow rounded'>
            <form
              data-testid={FORM_CARD_FIELDS.FORM_NAME}
              onSubmit={handleSubmit}
            >
              <div className='form-row'>
                <div className='col-md-12'>
                  <MaskInput
                    name={FORM_CARD_FIELDS.CARD_NUMBER}
                    data-testid={FORM_CARD_FIELDS.CARD_NUMBER}
                    onChange={handleChange}
                    maskChar=''
                    mask={cardNumberMask}
                    className='form-control'
                    placeholder='Card number'
                    autoComplete='off'
                    required
                  />
                </div>
              </div>
              <div className='form-row mt-3'>
                <div className='col-md-12'>
                  <MaskedTextInput
                    name={FORM_CARD_FIELDS.CARD_NAME}
                    data-testid={FORM_CARD_FIELDS.CARD_NAME}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Card Name'
                    maxLength='21'
                    mask={(s) => Array.from(s).map(() => /[a-z ]/i)}
                    guide={false}
                    autoComplete='off'
                    required
                  />
                </div>
              </div>
              <div className='form-row mt-3 d-flex justify-content-between'>
                <div className='col-md-5'>
                  <MaskInput
                    name={FORM_CARD_FIELDS.EXP_DATE}
                    data-testid={FORM_CARD_FIELDS.EXP_DATE}
                    onChange={handleChange}
                    mask='00/00'
                    className='form-control'
                    placeholder='Exp. Date'
                    autoComplete='off'
                    required
                  />
                </div>
                <div className='col-md-5'>
                  <MaskInput
                    name={FORM_CARD_FIELDS.CVV}
                    data-testid={FORM_CARD_FIELDS.CVV}
                    onChange={handleChange}
                    onFocus={() => setRotate(true)}
                    onBlur={() => setRotate(false)}
                    mask='000'
                    className='form-control'
                    placeholder='CVV'
                    autoComplete='off'
                    required
                  />
                </div>
              </div>
              <div className='form-row mt-3'>
                <div className='col-md-12'>
                  <button
                    data-testid={FORM_CARD_FIELDS.BUTTON}
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
      <div className='row d-flex justify-content-center mt-3'>
        <CardTables cardList={cardList} />
      </div>
    </>
  );
};
