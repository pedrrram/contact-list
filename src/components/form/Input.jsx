import InputField from './InputField';
import Select from './Select';

const Input = (props) => {
  return (
    <>
      {props.type === 'select' ? (
        <Select {...props} />
      ) : (
        <InputField {...props} />
      )}
    </>
  );
};

export default Input;
