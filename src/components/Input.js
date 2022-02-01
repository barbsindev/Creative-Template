import React, { useState } from "react";
import "./Input.scss";
function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        placeholder={props.placeholder}
        className="column__input"
      />
    </>
  );
}
export default FormInput;
