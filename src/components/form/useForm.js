import { useState } from 'react';

import Input from './Input';

export default function useForm(config) {
  const initialData = {};
  for (const input of config) {
    initialData[input.name] = '';
  }

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const Inputs = config.map((input) => (
    <Input
      key={input.name}
      name={input.name}
      type={input.type}
      label={input.label}
      placeholder={input.placeholder}
      options={input.options}
      value={data[input.name]}
      className={input.className}
      handleChange={handleChange}
    />
  ));

  return [data, setData, Inputs];
}
