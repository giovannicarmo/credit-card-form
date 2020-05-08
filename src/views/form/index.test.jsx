import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { FORM_CARD_FIELDS } from '../../utils/constants/form';
import Form from './index';

const setFormValue = (el) => ({ target: { value: el } });

describe('Tests for Form component', () => {
  it('Should add new row on table containing a credit card information',() => {
    const { getByTestId } = render(<Form />);

    const number = getByTestId(FORM_CARD_FIELDS.CARD_NUMBER);
    const name = getByTestId(FORM_CARD_FIELDS.CARD_NAME);
    const date = getByTestId(FORM_CARD_FIELDS.EXP_DATE);
    const cvv = getByTestId(FORM_CARD_FIELDS.CVV);
    const form = getByTestId(FORM_CARD_FIELDS.FORM_NAME);

    fireEvent.change(number, setFormValue('5248782014348220'));
    fireEvent.change(name, setFormValue('GABRIEL M FRANCA'));
    fireEvent.change(date, setFormValue('12/24'));
    fireEvent.change(cvv, setFormValue('024'));

    fireEvent.submit(form);

    expect(!!getByTestId('5248782014348220')).toBe(true);
  });
});
