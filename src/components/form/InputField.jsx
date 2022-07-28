import { memo } from "react";

const InputField = ({
  key,
  label,
  name,
  type,
  placeholder,
  handleChange,
  className,
  value,
}) => {
  return (
    <div className="flex justify-center items-center">
      <label className="mr-3 sm:w-16">{label}:</label>
      <input
        name={name}
        key={key}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
};

export default memo(InputField);
