import { memo } from 'react';
import { Link } from 'react-router-dom';

import Contact from './Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="text-zinc-50 mt-6 w-full flex flex-col items-center space-y-3">
      {contacts.map((contact) => (
        <Link
          key={contact.id}
          to={`contacts/${contact.id}`}
          state={{ contact }}
          className="w-full sm:w-1/3 block"
        >
          <Contact deleteContact={deleteContact} contact={contact} />
        </Link>
      ))}
    </div>
  );
};

export default memo(ContactList);
