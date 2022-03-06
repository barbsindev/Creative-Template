import React, { useState } from "react";
import "./Input.scss";
import Button from "../button/Button";

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <form>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        placeholder={props.placeholder}
        className="column__input"
      />
      <Button label={props.label} />
    </form>
  );
}
export default FormInput;
