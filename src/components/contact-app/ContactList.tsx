import React, { memo } from 'react';

import { IContact } from '../../types/types';
import Contact from './Contact'

interface Props {
  contacts: IContact[];
  deleteContact: (id: number) => void;
}

const ContactList: React.FC<Props> = ({ contacts, deleteContact }) => {
  return (
    <div className="text-zinc-50 mt-6 w-full flex flex-col items-center space-y-3">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          deleteContact={deleteContact}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default memo(ContactList);
