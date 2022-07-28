import { memo } from 'react';

import Contact from './Contact';

const ContactList = ({ contacts, deleteContact }) => {
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
