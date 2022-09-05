import React from 'react';
import { useState } from 'react';
// import { useState, useEffect } from 'react';

function Inputs() {
  const [userCurrencyFrom, setUserCurrencyFrom] = useState('');
  const [userCurrencyTo, setUserCurrencyTo] = useState('');

  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${userCurrencyTo}&from=${userCurrencyFrom}&amount=${100}`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  //   const handleClickConvert = () => {};
  return (
    <div>
      <input type="text" onChange={e => setUserCurrencyFrom(e.target.value)} />
      <input type="text" onChange={e => setUserCurrencyTo(e.target.value)} />
      {/* <input type="text" onChange={e => setUserCurrencyTo(e.target.value)} /> */}
      <button type="button" onClick={handleSubmit}>
        Convert
      </button>
    </div>
  );
}

export default Inputs;
