export const FORM_CARD_FIELDS = {
  CARD_NUMBER: 'cardNumber',
  EXP_DATE: 'expDate',
  CARD_NAME: 'card_name',
  CVV: 'cvv'
};

export const CREDIT_CARD = {
  AMEX: {
    flag: require('./../../assets/images/png/logo-amex.png'),
    prefix: ['34', '37']
  },
  DINNERS_CLUB: {
    flag: require('./../../assets/images/png/logo-dinersclub.png'),
    prefix: ['36', '38', '300', '301', '302', '303', '304', '305']
  },
  HIPERCARD: {
    flag: require('./../../assets/images/png/logo-hipercard.png'),
    prefix: ['6062']
  },
  MASTERCARD: {
    flag: require('./../../assets/images/png/logo-mastercard.png'),
    prefix: ['51', '52', '53', '54', '55']
  },
  VISA: {
    flag: require('./../../assets/images/png/logo-visa.png'),
    prefix: ['4']
  }
};
