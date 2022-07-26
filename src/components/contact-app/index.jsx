import { useState } from 'react';

import AddContact from './AddContact';
import ContactList from './ContactList';

const ContactApp = () => {
  const [contacts, setConatcts] = useState([]);

  const addContact = (contact) => {
    setConatcts((prevContacts) => [
      ...prevContacts,
      { id: Date.now(), ...contact },
    ]);
  };

  const deleteContact = (id) => {
    setConatcts((prevContacts) => [
      ...prevContacts.filter((cn) => cn.id !== id),
    ]);
  };

  return (
    <>
      <AddContact addContact={addContact} />
      {contacts.length ? (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      ) : null}
    </>
  );
};

export default ContactApp;
