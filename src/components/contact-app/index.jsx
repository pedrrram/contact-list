import { useCallback, useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { getContacts } from '../../services/contactServices';
import ContactList from './ContactList';

const ContactApp = () => {
  const [contacts, setConatcts] = useState([]);

  const addContact = useCallback((contact) => {
    setConatcts((prevContacts) => [...prevContacts, contact]);
  }, []);

  const deleteContact = useCallback((id) => {
    setConatcts((prevContacts) => [
      ...prevContacts.filter((cn) => cn.id !== id),
    ]);
  }, []);

  useEffect(() => {
    getContacts()
      .then((data) => {
        setConatcts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Outlet context={addContact} />
      {contacts.length ? (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      ) : null}
    </>
  );
};

export default ContactApp;
