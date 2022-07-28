import { memo } from 'react';

import { contactFormConfig } from '../form/contactFormConfig';
import useForm from '../form/useForm';

const AddContact = ({ addContact }) => {
  const [data, setData, Inputs] = useForm(contactFormConfig);

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.name && data.email) {
      addContact(data);
      setData({ name: '', email: '' });
    }
  };

  return (
    <form className="bg-zinc-800 w-full flex flex-col items-center justify-center p-5 rounded-xl text-lg">
      <div className="flex flex-col justify-center items-center sm:w-96 space-y-4">
        {Inputs}
        <button
          type="submti"
          onClick={submitHandler}
          className="text-zinc-800 bg-yellow-500 font-normal border border-yellow-500 px-5 py-2 rounded-lg transition-all duration-300
         hover:shadow-lg hover:shadow-yellow-500/50"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default memo(AddContact);
