import React, { useState } from "react";
/*
Сделать валидацию формы ввода.
border тега input должен стать
зеленым, если переданная валидация истинна,
иначе должен стать красным.
Валидация должна проверяться при каждом вводе
*/

function Exercise4() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 4</h1>
      <TextValidate validate={value => value.length > 5} />
    </div>
  );
}

export default Exercise4;

function TextValidate({ validate }) {
    const [inputValue, setInputValue] = useState("");
    const [isValid, setIsValid] = useState(true);
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      setIsValid(validate(value));
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{ border: isValid ? "2px solid green" : "2px solid red" }}
        />
      </div>
    );
  }