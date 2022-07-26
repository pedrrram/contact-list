import { useState } from 'react';

import FormControl from './FormControl';

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  const changeHandler = (e) => {
    setContact((prevCon) => ({ ...prevCon, [e.target.name]: e.target.value }));
  };

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
          className="bg-zinc-900 text-zinc-50 border border-zinc-900 px-4 py-2 rounded-lg transition-all duration-300
        hover:bg-zinc-200 hover:text-zinc-900"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default AddContact;
