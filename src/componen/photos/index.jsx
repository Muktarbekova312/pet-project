import React, { useState } from 'react';
import Photo from './Photo';

function Photos() {
  const [value, setvalue] = useState([]);
  const [inputValue, setinputValue] = useState('');
  function changeText() {
    setvalue((prevValues) => [...prevValues, inputValue]);
  }
  const userData = {
    username: 'John',
    age: 21,
  };
  return (
    <div className="photo-list">
      <input
        // defaultValue={'Hi'}
        value={inputValue}
        onChange={(event) => setinputValue(event.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={changeText}>ДОбавить</button>
      <ul>
        {value.map(function (el) {
          return <li>{el}</li>;
        })}
      </ul>
      {value.length === 3 && <li>Хватит</li>}

    </div>
  );
}

export default Photos;

