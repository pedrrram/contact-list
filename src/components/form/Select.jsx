const Select = ({
  key,
  label,
  name,
  type,
  placeholder,
  handleChange,
  className,
  value,
  options,
}) => {
  const optionList = options.map((option) => (
    <option key={option} value={option.toLowerCase()}>
      {option}
    </option>
  ));
  return (
    <p>
      <label>{label}</label>
      <select
        name={name}
        key={key}
        type={type}
        value={value}
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        className={className}
      >
        {optionList}
      </select>
    </p>
  );
};

export default Select;
