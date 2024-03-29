import React, { FormEvent, memo } from 'react';

import { useOutletContext } from 'react-router-dom';

import { addContactService } from '../../services/contactServices';

import { contactFormConfig } from '../form/contactFormConfig';
import useForm from '../form/useForm';
import Button from '../Button';
import { IContact } from '../../types/types';

type ContextType = (contact: IContact) => void;

const AddContact: React.FC = () => {
  const addContact = useOutletContext<ContextType>();
  const [data, setData, Inputs] = useForm(contactFormConfig);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (data.name && data.email) {
      const contact: IContact = {
        id: new Date().getTime(),
        ...data,
      };
      addContactService(contact)
        .then((res) => {
          if (res.status === 201) {
            addContact(contact);
            setData({ name: '', email: '' });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form className="bg-zinc-800 w-full flex flex-col items-center justify-center p-5 rounded-xl text-lg">
      <div className="flex flex-col justify-center items-center sm:w-96 space-y-4">
        {Inputs}
        <Button onClick={submitHandler}>Add Contact</Button>
      </div>
    </form>
  );
};

export default memo(AddContact);