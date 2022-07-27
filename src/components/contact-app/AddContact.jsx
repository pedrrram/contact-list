import { useState, useCallback } from 'react';
import { memo } from 'react';

import FormControl from './FormControl';

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  const changeHandler = useCallback((e) => {
    setContact((prevCon) => ({ ...prevCon, [e.target.name]: e.target.value }));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (contact.name && contact.email) {
      addContact(contact);
      setContact({ name: '', email: '' });
    }
  };

  return (
    <form className="bg-zinc-800 w-full flex flex-col items-center justify-center p-5 rounded-xl text-lg">
      <div className="flex flex-col justify-center items-center sm:w-96 space-y-4">
        <FormControl
          labelValue="Name"
          inputAttrs={{
            name: 'name',
            value: contact.name,
            onChange: changeHandler,
            type: 'text',
          }}
        />
        <FormControl
          labelValue="Email"
          inputAttrs={{
            name: 'email',
            value: contact.email,
            onChange: changeHandler,
            type: 'text',
          }}
        />
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
