interface RadioInputProps {
  val: number;
  label: string;
  max?: number;
  onChange: (value: number) => void;
}

const RadioInput = ({ max, val, label, onChange }: RadioInputProps) => {
  return (
    <div>
      {Array.from({ length: max ?? 5 }, (_, i) => (
        <label key={i} style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            name={label + i}
            value={i}
            checked={val > i}
            onChange={() => onChange(i)}
          />
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
