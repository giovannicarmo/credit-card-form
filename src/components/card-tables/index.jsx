import React from 'react';

export default ({ cardList }) => {
  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Number</th>
          <th scope='col'>Name</th>
          <th scope='col'>Date</th>
          <th scope='col'>CVV</th>
          <th scope='col'>Brand</th>
        </tr>
      </thead>
      <tbody>
        {cardList.map((card) => {
          const id = card.number.replace(/\s/g, '');
          return (
            <tr data-testid={id} key={id}>
              <th scope='row'>{cardList.indexOf(card) + 1}</th>
              <td scope='col'>{card.number}</td>
              <td scope='col'>{card.name}</td>
              <td scope='col'>{card.date}</td>
              <td scope='col'>{card.cvv}</td>
              <td scope='col'>
                <img src={card.flag} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
