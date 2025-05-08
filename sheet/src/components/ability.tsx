import { useState } from "react";
import RadioInput from "./radio";
import "./ability.css";

interface AbilityInputProps {
  value: number;
  label: string;
  max?: 6 | 7 | 8 | 9 | 10;
  onChange?: (value: number) => void;
  specialization?: string;
}

const CharacterPropertyInput = ({
  value,
  label,
  specialization,
  max,
}: AbilityInputProps) => {
  const [selectedValue, setValue] = useState(value | 0);

  const handleChange = (newValue: number) => {
    console.log("newValue", newValue);
    if (newValue + 1 === selectedValue) {
      setValue(newValue);
      return;
    }
    setValue(newValue + 1);
  };

  return (
    <div className="ability-input">
      <label htmlFor={label} style={{ marginRight: "10px" }}>
        {/* convert component to uppercase */}
        {label}
      </label>
      {/* convert to own component */}
      <input
        type="text"
        id={label}
        value={specialization}
        style={{ marginRight: "10px" }}
      />
      <RadioInput
        val={selectedValue}
        label={label}
        max={max ?? 5}
        onChange={(newValue) => handleChange(newValue)}
      />
    </div>
  );
};

export default CharacterPropertyInput;
